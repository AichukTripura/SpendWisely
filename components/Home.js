import React from "react";
import {View, Text, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {icons, images, FONTS, COLORS, SIZES} from "../constants"

const Home = () => {

    function renderNavBar() {
        return (
            <View
                style = {{
                    flexDirection:"row",
                    height:80,
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <TouchableOpacity
                    style = {{justifyContent: "center", width: 50,}}
                    onPress = {() => console.log("Go back")}
                >
                    <Image
                        source = {icons.back_arrow}
                        style={{
                            width:30,
                            height: 30,
                            tintColor: COLORS.primary
                        }} 
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: "center",
                        alignItems: "flex-end",
                        width:50
                    }}
                    onPress = {() => console.log("More options")}
                >
                    <Image
                        source = {icons.more}
                        style={{
                            width:30,
                            height:30,
                            tintColor: COLORS.primary,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View 
                style={{
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <View>
                    <Text style={{color: COLORS.primary, ...FONTS.h2}}>My Expenses</Text>
                    <Text style ={{color: COLORS.darkgray, ...FONTS.h3}}>Summary (private)</Text>
                </View>

                <View style ={{flexDirection:"row", marginTop: SIZES.padding, alignItems: "center"}}>
                    <View 
                        style =
                          {{height: 50, 
                            width: 50, 
                            backgroundColor: COLORS.lightGray, 
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: "center",
                          }}
                    >
                        <Image
                            source = {icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    <View style={{marginLeft: SIZES.padding}}>
                        <Text style={{color: COLORS.primary, ...FONTS.h3}}>11 Nov, 2020</Text>
                        <Text style={{color: COLORS.darkgray, ...FONTS.body3}}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategoryHeader() {
        return (
            <View style={{flexDirection:'row', padding: SIZES.padding, justifyContent:"space-between", alignItems: "center"}}>
                <View>
                    <Text style={{color: COLORS.primary, ...FONTS.h3}}>Categories</Text>
                    <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>7 Total</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity 
                        style ={{height: 50, 
                            width: 50, 
                            backgroundColor: COLORS.secondary, 
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: "center",
                          }}
                    >
                        <Image 
                            source={icons.chart}
                            resizeMode="contain"
                            style = {{width:20, height:20}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style ={{height: 50, 
                            width: 50, 
                            backgroundColor: COLORS.secondary, 
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: "center",
                          }}
                    >
                        <Image 
                            source={icons.menu}
                            resizeMode="contain"
                            style = {{width:20, height:20}}
                        />
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
            {renderNavBar()}
            {renderHeader()}
            {renderCategoryHeader()}
        </View>
    )
}

export default Home;