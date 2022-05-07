import React from 'react';
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : 'auto'};
    grid-auto-flow: ${props => props.flow ? props.flow : ''};
    grid-template-columns: ${props => props.columns ? `repeat(${props.columns}, minmax(0, 1fr))` : ''};
    grid-template-rows: ${props => props.rows ? `repeat(${props.rows}, minmax(0, 1fr))` : ''};
    row-gap: ${props => props.rowGap ? props.rowGap : ''};
    column-gap: ${props => props.columnGap ? props.columnGap : ''};
    justify-items: ${props => props.justify ? props.justify : 'flex-start'};
    align-items: ${props => props.align ? props.align : 'flex-start'};
`

export {
    Grid
}