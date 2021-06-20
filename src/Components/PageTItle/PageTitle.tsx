import React from 'react'

interface IProps {
    title: string
}

const PageTitle: React.FC<IProps> = ({ title }) => (
    <>
        <div style={{paddingBottom: '30px'}}>
            <span style={{fontSize: '25px', fontWeight: 'bold'}}>{title}</span>
        </div>
    </>
)

export default PageTitle
