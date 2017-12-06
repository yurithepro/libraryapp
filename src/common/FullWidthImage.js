import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

export default class FullWidthImage extends Component {
    constructor() {
        super();

        this.state = {
            width: 0,
            height: 0
        };
    }

    _onLayout(event) {
        const containerWidth = event.nativeEvent.layout.width;

        if (this.props.ratio) {
            this.setState({
                width: containerWidth,
                height: containerWidth * this.props.ratio
            });
        } else {
            Image.getSize(this.props.source, (width, height) => {
                this.setState({
                    width: containerWidth,
                    height: containerWidth * height / width
                });
            });
        }
    }

    render() {
        return (
            <View onLayout={this._onLayout.bind(this)}>
                <ImageBackground
                    style={this.props.style}
                    source={this.props.source}
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }} >
                    {this.props.children}
                </ImageBackground>
            </View>
        );
    }
}