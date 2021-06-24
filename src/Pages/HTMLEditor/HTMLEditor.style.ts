import styled from 'styled-components'
import { Form } from 'antd';

const { Item } = Form;

export const HTMLEditorWrapper = styled(Form)`
    display: flex;
`

export const HTMLEditorItemWrapper = styled(Item)`
    
`

export const HTMLEditorPreviewerWrapper = styled.div`
    border: 1px solid;
    padding: 30px;
`

export const AceEditorWrapper = styled.div`
    width: 30%;
`

export const HTMLPreviewerWrapper = styled.div`
    width: 70%;
    padding-left: 30px;
    padding-right: 30px;
`

export const SubTitle = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 30px;
`