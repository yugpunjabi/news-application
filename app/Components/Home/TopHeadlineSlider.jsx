import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Color from '@/app/Shared/Color';
import { useNavigation } from 'expo-router';

export default function TopHeadlineSlider({ newsList }) {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 15 }}>
            <FlatList
                data={newsList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('read-news',{news:item})}
                        style={{ width: 370, marginRight: 7, marginLeft: 7 }}>
                        <Image source={{ uri: item.image }}
                            style={{ height: 350, borderRadius: 10 }} />
                        <Text numberOfLines={3} style={{
                            marginTop: 10, fontSize: 23,
                            fontWeight: '800'
                        }}>{item.title}</Text>
                        <Text style={{ marginTop: 5, color: Color.primary }}>{item?.source?.name}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}
