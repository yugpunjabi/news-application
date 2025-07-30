import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '@/app/Shared/Color'
import { useNavigation } from 'expo-router'

export default function HeadlineList({ newsList }) {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                data={newsList}
                renderItem={({ item }) => (
                    <View>
                        <View style={{
                            height: 1, backgroundColor: Color.lightGray, marginTop: 10,
                        }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('read-news', { news: item })}
                            style={{
                                marginTop: 15, display: 'flex',
                                flexDirection: 'row'
                            }}>
                            <Image source={{ uri: item.image }}
                                style={{ width: 130, height: 130, borderRadius: 10 }} />
                            < View style={{  marginLeft: 10,flex:1 }}>
                                <Text numberOfLines={4} style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: Color.primary }}>{item?.source?.name}</Text>
                            </View>

                        </TouchableOpacity>

                    </View>

                )}
            />
        </View>
    )
}