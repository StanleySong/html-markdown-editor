/*!
 * stanley song (sxhuan@gmail.com)
 */

import React from 'react';
import ReactQuill from 'react-quill';
import ContentWrapper from './ContentWrapper';

export default class HtmlEditor extends React.Component {
    constructor(props) {
    super(props)
    this.state = { text: '' }
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <ContentWrapper>
            <ReactQuill theme="snow" value={this.state.text} onChange={this.handleChange}>
                <div className="my-editing-area"/>
            </ReactQuill>
            </ContentWrapper>
        )
    }
}
