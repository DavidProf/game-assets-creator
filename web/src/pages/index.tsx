import React from 'react'
import Link from 'next/link'
import { Container, Grid, Button } from '@material-ui/core'
import domtoimage from 'dom-to-image'

export const Home: React.FC = () => {
    const [src, setSrc] = React.useState('')
    const actual = React.useRef<HTMLDivElement>(null)

    const test = async () => {
        if (actual.current) {
            const urlEncodedData = await domtoimage.toPng(actual.current, {
                width: 200,
                height: 200
            })
            setSrc(urlEncodedData)
        }
    }
    return (
        <>
            <Container maxWidth="lg">
                <Grid container justify="space-between" spacing={2}>
                    <Grid item xs={12}>
                        <Link href="/" shallow={true}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={test}
                            >
                                Test
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <div ref={actual}>
                            <span>Meu nome é david</span>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={test}
                            >
                                Test
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={src}
                            alt="nothing for now"
                            style={{ border: '1px solid white' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home
