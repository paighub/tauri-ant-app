import React from 'react';

import { useVersion } from '../context/VersionContext';

const FooterPage: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { version } = useVersion();

    return <div>
        <div>
            Ant Design ©{currentYear} Created by Ant UED
        </div>
        <div>
            Version: {version}
        </div>
    </div>
};

export default FooterPage;