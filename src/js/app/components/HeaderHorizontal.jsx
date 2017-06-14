/*!
 * stanley song (sxhuan@gmail.com)
 */

import { Layout, Menu, Tag, Row, Col, Icon, Dropdown } from 'antd';

const { Header } = Layout;

class HeaderHorizontal extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }



    render() {

        return (
            <Layout>
                <Header className="header">
                    <Row>
                        <Col span={12} offset={6}>
                            <Tag className="km-tag" onClick={function(){ }.bind(this)}>HTML</Tag>
                            <Tag className="km-tag" onClick={function(){ }.bind(this)}>MARKDOWN</Tag>
                            <a target="_blank" className="ant-tag km-tag ant-tag-text" rel="noopener noreferrer" href="https://github.com/StanleySong/react-html-markdown-editor">Github</a>
                        </Col>
                    </Row>
                </Header>
            </Layout>
            );
    }

}

export default HeaderHorizontal;
