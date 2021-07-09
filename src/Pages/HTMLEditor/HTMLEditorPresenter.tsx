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
import "ace-builds/src-noconflict/ace";
import "ace-builds/webpack-resolver" ;
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import cheerio from 'cheerio';
import htmlParser from 'html-react-parser';

interface IProps {
    form: FormInstance;
    fileList: UploadFile[];
    htmlString: string;
    setFileList: (value: UploadFile[]) => void
    setHtmlString: (value: string) => void
} 

const HTMLEditorPresenter: React.FC<IProps> = ({
    form,
    fileList,
    htmlString,
    setFileList,
    setHtmlString,
}) => {
    const fileUpload = async (file: any) => {
        setHtmlString(await file.text());

        return false;
    }

    const createHtml = () => {
        return {__html: htmlString}
    }

    const contentEditableChange = (e: any)=> {
        const newHtml= e.target.outerText;

        const $ = cheerio.load(htmlString);
        $('body').text(newHtml);

        const result = $.html().replace('<body>', '<body>\n').replace('</body></html>', '\n</body>\n</html>');;

        return setHtmlString(result);
    };


    return (
        <>
            <PageTitle title='송이 에디터' />
            <HTMLEditorWrapper form={form}>
                <AceEditorWrapper>
                    <SubTitle>HTML 업로드</SubTitle>
                    <HTMLEditorItemWrapper label='HTML 파일 업로드'>
                        <Upload
                            accept='.html'
                            showUploadList={false}
                            multiple={false}
                            beforeUpload={fileUpload}
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
                            value={htmlString}
                            onChange={setHtmlString}
                        />
                    </HTMLEditorItemWrapper>
                </AceEditorWrapper>
                <HTMLPreviewerWrapper>
                    <SubTitle>HTML 미리보기</SubTitle>
                    <HTMLEditorPreviewerWrapper
                        contentEditable={true}
                        dangerouslySetInnerHTML={createHtml()}
                        onInput={contentEditableChange}
                    >
                    </HTMLEditorPreviewerWrapper>
                </HTMLPreviewerWrapper>
                
            </HTMLEditorWrapper>
        </>
    )
}

export default HTMLEditorPresenter
