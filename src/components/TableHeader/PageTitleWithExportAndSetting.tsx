import React from 'react';

/** Components */
import PageTitle from './PageTitle';
import ButtonIcon from '../ButtonBase/ButtonIcon';

const PageTitleWithExport = ({title}: any) =>
    <PageTitle title={title}>
        <ButtonIcon text={"Настройки"}/>
        <ButtonIcon text={"Экспорт"}/>
    </PageTitle>

export default PageTitleWithExport;