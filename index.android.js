
import React,{Component,PropTypes} from 'react';
import {
  requireNativeComponent,
  View,
} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

export default class ImageViewZoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const source = resolveAssetSource(this.props.source);
    if (source && source.uri){

      const props = {...this.props, src: source };
      return <ZoomImage {...props} />;
    }
    return null
  }
}

const cfg = {
  nativeOnly: {
    src: true,
  },
};
const ZoomImage = requireNativeComponent('ImageViewZoom', ImageViewZoom, cfg);
