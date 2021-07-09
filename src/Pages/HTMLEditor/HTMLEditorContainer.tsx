import React, { useState, useEffect } from 'react';
import { Form } from 'antd'
import HTMLEditorPresenter from './HTMLEditorPresenter';
import { UploadFile } from 'antd/lib/upload/interface';
import { BASE_URL } from '../../Components/BASE_URL';

const HTMLEditorContainer: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [htmlString, setHtmlString] = useState<string>('');

    const [form] = Form.useForm();

    useEffect(() => {
    }, []);
    return (
        <>
            <HTMLEditorPresenter
                form={form}
                fileList={fileList}
                htmlString={htmlString}
                setFileList={setFileList}
                setHtmlString={setHtmlString}
            />
        </>
    )
}

export default HTMLEditorContainer
