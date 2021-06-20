import React from 'react';
import PageTitle from '../../Components/PageTItle';

const HomePresenter: React.FC = () => {
    return(
        <>
            <PageTitle title='홈' />
            <div>
                송이 에디터에 오신 것을 환영합니다.
            </div>
        </>
    );
}

export default HomePresenter;