import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import {
    createMuiTheme,
    MuiThemeProvider,
    CssBaseline,
    colors,
    Toolbar,
    AppBar
} from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: colors.blue[500]
        },
        secondary: {
            main: colors.blue[900]
        }
    },
    overrides: {
        MuiContainer: {
            root: {
                paddingTop: 40,
                paddingBottom: 80
            }
        }
    }
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (<>
        <Head>
            <title>Game Assets Generator</title>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Head>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
            <footer>
                <AppBar position="fixed" color="secondary" style={{ top: 'auto', bottom: 0 }}>
                    <Toolbar variant="dense">

                    </Toolbar>
                </AppBar>
            </footer>
        </MuiThemeProvider>
    </>)
}

export default MyApp
