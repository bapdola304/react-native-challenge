import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { choicenessData, categoryData, ImageData } from '../data/shopping';

const data = ['https://taimienphi.vn/tmp/cf/aut/hinh-anh-dep-ve-tinh-yeu-chung-thuy.jpg', 'https://taimienphi.vn/tmp/cf/aut/hinh-anh-dep-ve-tinh-yeu-chung-thuy.jpg']

const { width, height } = Dimensions.get('window');

class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedExerciseIndex: 0
        };
    }


    onImageListScroll = (event) => {
        const { x: xOffset } = event.nativeEvent.contentOffset;
        const selectedExerciseIndex = Math.round(xOffset / width);
        if (selectedExerciseIndex !== this.state.selectedExerciseIndex) {
            this.setState({ selectedExerciseIndex });
        }
    };

    renderPagerIndicator = (index) => {
        const additionalStyle = index === this.state.selectedExerciseIndex ?
            styles.pagerIndicatorSelected : null;
        const marginStyle = index === ImageData - 1 ?
            null : styles.indicatorMarginRight;
        return (
            <View
                style={[styles.pagerIndicator, additionalStyle, marginStyle]}
                key={index}
            />
        );
    };

    renderPagerImage = (info) => {
        console.log(info);
        
        return (
            <View style={styles.wrapImage} key = {info.item.id}>
                <Image source={info.item.image} style={styles.image} />
            </View>
        );
    };

    renderPager = () => {
        return (
            <View style={{ marginTop: 10 }}>
                <FlatList
                    horizontal={true}
                    renderItem={this.renderPagerImage}
                    data={ImageData}
                    onScroll={this.onImageListScroll}
                />
                <View style={styles.pagerIndicatorContainer}>
                    {ImageData
                        .map((item, i) => this.renderPagerIndicator(i))}
                </View>
            </View>
        );
    };

    renderListChoiceness = () => {
        return (
            choicenessData.map(item => {
                return (
                    <View style={styles.wrapItemChoice} key={item.id}>
                        <View style={styles.itemLeft}>
                            <Image source={item.imageUrl} style={styles.itemImage} />
                        </View>
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={styles.itemRightText}>{item.title}</Text>
                                <Text style={styles.moreText}>{item.des}</Text>
                            </View>
                        </View>
                    </View>
                )
            })
        )
    }

    renderCategory = () => {
        return (
            categoryData.map(item => {
                return (
                    <View>
                        <MaterialCommunityIcons name={item.name} color={item.color} size={item.size} />
                        <Text style={styles.categoryText}>{item.text}</Text>
                    </View>
                )
            })
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Search for your favorite"
                    />
                    <AntDesign name="search1" size={18} style={styles.searchIcon} color="#bfcad9" />
                </View>
                <View>
                    {this.renderPager()}
                </View>
                <View style={styles.wrapCategory}>
                    {this.renderCategory()}
                </View>

                <View style={styles.containerChoice}>
                    <View style={styles.wrapChoice}>
                        <View>
                            <Text style={styles.choiceText}>Choiceness</Text>
                        </View>
                        <View style={styles.wrapMore}>
                            <Text style={styles.moreText}>More</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={20} color="#b3b5bc" />
                        </View>
                    </View>
                    <ScrollView>
                        {this.renderListChoiceness()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 20
    },
    inputText: {
        height: 35,
        borderColor: '#bfcad9',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 8
    },
    searchIcon: {
        position: 'absolute',
        top: 6,
        right: 8
    },
    pagerIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    pagerIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#dadde2',
    },
    pagerIndicatorSelected: {
        backgroundColor: '#5675f2',
    },
    indicatorMarginRight: {
        marginRight: 12,
    },
    wrapImage: {
        marginVertical: 8,
        marginLeft: 8,
    },
    image: {
        width: (width * 90) / 100,
        height: 200,
        borderRadius: 15
    },
    wrapCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    categoryText: {
        color: '#838b9e'
    },
    wrapChoice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapMore: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    containerChoice: {
        paddingHorizontal: 8,
        marginTop: 20,
        flex: 1,
    },
    choiceText: {
        fontSize: 28,
        color: '#53595d'
    },
    moreText: {
        color: '#b3b5bc'
    },
    wrapItemChoice: {
        flexDirection: 'row',
        marginTop: 10
    },
    itemLeft: { width: '40%' },
    itemRight: { width: '60%', marginLeft: 8, paddingHorizontal: 8 },
    itemImage: { height: 100, width: '100%', borderRadius: 10 },
    itemRightText: { fontSize: 19, color: '#434a4f' }
});

export default ProductComponent;
