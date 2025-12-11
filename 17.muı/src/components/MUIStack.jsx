import { Divider, Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
    return (
        <div>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={10}
            >
                <div>ITEM 1</div>
                <div>ITEM 2</div>
                <div>ITEM 3</div>
            </Stack>
        </div>
    )
}

export default MUIStack
