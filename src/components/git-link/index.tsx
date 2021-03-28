import React from "react";
import {createUseStyles} from "react-jss";

interface IGitLink {
    link: string,
    icon?: string,
    color?: string,
    name: string
}

const useStyles = createUseStyles(()=>({
    container: {
        color: ({color}) => color,
        display: 'inline-flex',
        alignItems: "center",
        height: '2rem',
        marginLeft: '0.5rem'

    },
    icon: {
        color: "#FFF",
        background: ({color}) => color,
        height: 'calc(2rem - 4px)',
        borderRadius:'1rem'
    },

    iconContainer: {
        background: ({color}) => color,
        borderBottomLeftRadius: '1rem',
        borderTopLeftRadius:  '1rem',
        border: ({color}) => `2px solid ${color}`,
        borderRight: 0,
        height: '2rem',
        paddingLeft: '0.25rem'
    },
    link: {
        height: '2rem',
        border: ({color}) => `2px solid ${color}`,
        borderBottomRightRadius:  '1rem',
        borderTopRightRadius:  '1rem',
        paddingLeft: '0.25rem',
        paddingRight: '0.25rem',
        '&:hover': {
            textDecoration:'underline'
        }
    },
}));

const ImageLink: React.FC<IGitLink> = ({ link, name, icon = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", color = "#039be5" }) => {
    const classes = useStyles({ color });
    const isMaterialDesignIcon = icon.indexOf(".") < 0;
    return (
        <a className={classes.container} href={link} >
            <span className={classes.iconContainer}>
                {isMaterialDesignIcon ? <i className={`material-icons ${classes.icon}`}>{icon}</i> : <img className={classes.icon} src={icon} />}
            </span>
            <span className={classes.link}>{name}</span>
        </a>
    )
}

export default ImageLink;
