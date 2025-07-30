import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import Ionicons from '@expo/vector-icons/Ionicons';
import TopHeadlineSlider from './../Components/Home/TopHeadlineSlider'
import HeadlineList from './../Components/Home/HeadlineList'
import GlobalApi from '../Services/GlobalApi';

export default function Home() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GlobalApi.getTopHeadline().then(res => {
      console.log('NEWS API DATA:', res.data);
      setNewsList(res.data.articles);
    });
  }, []);
  

  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory('latest');
  }, [])

  const getNewsByCategory = async (category) => {
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data;
    setNewsList(result.articles)
    setLoading(false);
  }

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    setNewsList(result.articles)
  }
  return (
    <ScrollView style={{ backgroundColor: Color.white }}>

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={styles.appName}>News Application</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>


      {/* Category List */}
      <CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)} />

      {loading ? <ActivityIndicator style={{ marginTop: Dimensions.get('screen').height * 0.40 }}
        size={'large'} color={Color.primary} /> :
        <View>
          {/* Top Headline Slider */}
          <TopHeadlineSlider newsList={newsList} />

          {/* Headline List */}
          <HeadlineList newsList={newsList} />
        </View>
      }

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.primary
  }
})