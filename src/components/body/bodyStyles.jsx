const styles = {
    root: {
        fontFamily: [
            '"Segoe UI"',
            'Roboto'
        ],
        color:'white',
        backgroundColor: '#282c34 !important',
        padding: '2.5em 2em',
    },
    divider:{
        backgroundColor: "#f50057d4",
        margin: "0 auto",
        width: "70%"
    },
    parr:{
        maxWidth: "350px",
        margin: "0 auto",
        textAlign: "justify",
        lineHeight: "1.6",
        fontSize: "16px",
        fontWeight: "400",
        '@media (max-width: 1024px)':{
            paddingLeft:"10px",
            paddingRight:"10px"
        }
    },
    h1:{
        marginBottom: "0px"
    },
    dividerFull:{
        backgroundColor: "#f50057d4",
        margin: "2.5em auto",
        width: "95%"
    },
    itemCenter:{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
        padding: "20px 48px"
    },
    cardActionArea:{
        paddingTop:'2em'
    },
    container:{
        padding: '3.5em 0'
    },
    divSection:{
        backgroundColor: 'white',
        color:'black'
    },
    avatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    heightAll: {
        height: '100%'
    },
    card: {
        maxWidth: 345,
    }
}

export default styles;
