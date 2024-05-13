import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../redux/reducers/getUserList';
import {CardComponent} from '../../components';
import styles from './styles';

const Home = () => {
  const {data, isLoading, isFailure} = useSelector(state => state.dataReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  // Early return
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isFailure) {
    return (
      <View style={styles.failureMessageContainer}>
        <Text style={styles.failureMessageText}>Something Went Wrong</Text>
        <TouchableOpacity
          onPress={() => dispatch(getData())}
          style={styles.failureButton}>
          <Text>Try Again </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardComponent title={item.title} body={item.body} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
