import {
    HTMLEditorWrapper,
    AceEditorWrapper,
    HTMLPreviewerWrapper,
} from './HTMLEditor.style'
import PageTitle from '../../Components/PageTItle'
// import AceEditor from 'react-ace-editor';

const HTMLEditorPresenter = () => {
    return (
        <>
            <PageTitle title='송이 에디터' />
            <HTMLEditorWrapper>
                <AceEditorWrapper>Hello Here is HTML Editor</AceEditorWrapper>
                <HTMLPreviewerWrapper>
                    Hello Here is HTML Editor
                </HTMLPreviewerWrapper>
            </HTMLEditorWrapper>
        </>
    )
}

export default HTMLEditorPresenter
