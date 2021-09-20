import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, Image } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
              thumbnail: require("../../assets/quartadacarne.png"),
             
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
      
        return (


          


          <View style={{
              backgroundColor:'#ffc551',
              borderRadius: 5,
              height: 250,
              display:'flex',
              alignItems:'center',
              justifyContent: 'center',
              borderRadius:50,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>


             <Image
             source={item.thumbnail}
             style={{width:280, height:170}}
    
/>
            
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, paddingTop: 30 }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"tinder"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}