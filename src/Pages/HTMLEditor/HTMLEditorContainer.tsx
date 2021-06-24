import React, { useState, useEffect } from 'react';
import { Form } from 'antd'
import HTMLEditorPresenter from './HTMLEditorPresenter';
import { UploadFile } from 'antd/lib/upload/interface';
import { BASE_URL } from '../../Components/BASE_URL';

const HTMLEditorContainer: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    
    const [form] = Form.useForm();

    useEffect(() => {
    }, []);
    return (
        <>
            {/* <button onClick={() => {console.log(BASE_URL)}}>Test</button> */}
            <HTMLEditorPresenter
                form={form}
                fileList={fileList}
                setFileList={setFileList}
            />
        </>
    )
}

export default HTMLEditorContainer
