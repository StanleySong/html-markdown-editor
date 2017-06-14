/*!
 * stanley song (sxhuan@gmail.com)
 */

import { Layout } from 'antd';
const { Content } = Layout;

export default class ContentWrapper extends React.Component {
    constructor(props, context) {
        super(props, context);
    };


    render() {

        var childElement = this.props.children;

        return (
            <Layout>
                <Content className="contents">
                    {childElement}
                </Content>
            </Layout>
        );
    }
}

