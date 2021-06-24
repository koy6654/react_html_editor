import { Upload, Button } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface'
import { UploadOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form'
import {
    SubTitle,
    HTMLEditorWrapper,
    HTMLEditorItemWrapper,
    HTMLEditorPreviewerWrapper,
    AceEditorWrapper,
    HTMLPreviewerWrapper,
} from './HTMLEditor.style'
import PageTitle from '../../Components/PageTItle'
import AceEditor from 'react-ace';
import htmlParser from 'html-react-parser';

interface IProps {
    form: FormInstance;
    fileList: UploadFile[];
    setFileList: (value: UploadFile[]) => void
} 

const HTMLEditorPresenter: React.FC<IProps> = ({
    form,
    fileList,
    setFileList,
}) => {
    const fileUpload = (file: any) => {
        setFileList(file.fileList);
    }

    const createHtml = () => {
        return {__html: `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            This is test HTML
        </body>
    </html>
        `}
    }

    return (
        <>
            <PageTitle title='송이 에디터' />
            <HTMLEditorWrapper form={form}>
                <AceEditorWrapper>
                    <SubTitle>HTML 업로드</SubTitle>
                    <HTMLEditorItemWrapper label="HTML 파일 업로드">
                        <Upload
                            fileList={fileList}
                            multiple={false}
                            onChange={fileUpload}
                        >
                            <Button>{<UploadOutlined />}파일 업로드</Button>
                        </Upload>
                    </HTMLEditorItemWrapper>
                    <HTMLEditorItemWrapper>
                        <AceEditor
                            mode='html'
                            theme='github'
                            width='90%'
                            height='50vh'
                        />
                    </HTMLEditorItemWrapper>
                </AceEditorWrapper>
                <HTMLPreviewerWrapper>
                    <SubTitle>HTML 미리보기</SubTitle>
                    <HTMLEditorPreviewerWrapper
                        contentEditable={true}
                        dangerouslySetInnerHTML={createHtml()}>
                    </HTMLEditorPreviewerWrapper>
                </HTMLPreviewerWrapper>
                
            </HTMLEditorWrapper>
        </>
    )
}

export default HTMLEditorPresenter
