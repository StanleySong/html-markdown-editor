/*!
 * stanley song (sxhuan@gmail.com)
 */

import React from 'react';
import ReactQuill from 'react-markdown';
import ContentWrapper from './ContentWrapper';

export default class MDEditor extends React.Component {
    constructor(props) {
    super(props)
    this.state = { text: '' }
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        var input = '# This is a header\n\nAnd this is a paragraph';

        return (
            <ContentWrapper>
                <ReactMarkdown source={input} />
            </ContentWrapper>
            
        )
    }
}