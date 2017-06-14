/*!
 * stanley song (sxhuan@gmail.com)
 */

import React from 'react';
import ReactQuill from 'react-quill';
import ContentWrapper from './ContentWrapper';
import {Row, Col, Button} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class HtmlEditor extends React.Component {
    constructor(props) {
    super(props)
        this.state = { 
            text: '', 
            placeholder: "Please write something...",
            formats: [
                'header', 'font', 'size',
                'background', 'color', 'code', 'script','code-block',
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image', 'video', 'formula'
            ],
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, false] }, { 'font': [] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    ['blockquote', 'code-block'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, 
                    { 'direction': 'rtl' },
                    { 'align': [] },
                    {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image', 'video'],
                    ['clean']
                ]
            }
        }
    }

    handleChange(value) {
        this.setState({ text: value })
        console.log(this.state.text);
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col span={12}>
                        <ReactQuill 
                            theme="snow" 
                            value={this.state.text}
                            onChange={this.handleChange.bind(this)}
                            modules={this.state.modules}
                            formats={this.state.formats}
                            placeholder={this.state.placeholder}
                        >
                            <div className="my-editing-area"/>
                        </ReactQuill>
                    </Col>
                    <Col span={12}>
                        <div className="tool-bar">
                            <CopyToClipboard text={this.state.text}
                                onCopy={() => this.setState({copied: true})}>
                                <Button type="primary">Copy To Clipboard</Button>
                            </CopyToClipboard>
                        </div>
                        {this.state.text}
                    </Col>
                </Row>
            </ContentWrapper>
        )
    }
} 
