import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import { EnviromentButton } from '../components/EnviromentButton';
import { Header } from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load';

import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentProps {
  key: string,
  title: string
}

interface PlantsProps {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  }
}

export function PlantSelect(){

  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filterPlants, setFilterPlants] = useState<PlantsProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingAll, setLoadingAll] = useState(false);

  function handleEnvironmentSelected(environment: string) {
    setEnviromentSelected(environment);

    if (environment === 'all'){
      return setFilterPlants(plants);
    }

    const filtered = plants.filter(plant => (
      plant.environments.includes(environment)
    ))

    setFilterPlants(filtered);
  }

  function handleFetchMore(distance: number){
    if(distance < 1){
      return;
    }

    setLoadingMore(true);
    setPage(oldValues => oldValues + 1);
    fetchPlants();
  }

  async function fetchPlants(){
    const {data} = await api
    .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
    
    if(!data){
      return setIsLoading(true)
    }
    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data]);
      setFilterPlants(oldValue => [...oldValue, ...data]);
    }
    else{
      setPlants(data);
      setFilterPlants(data);
    }
    setIsLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    async function fetchEnviroment(){
      const {data} = await api
      .get('plants_environments?_sort=title&_order=asc');
      setEnviroments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }
    fetchEnviroment();

  }, [])

  useEffect(() => {
    fetchPlants();
  }, [])

  if(isLoading){
    return <Load/>
  }
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/> 
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>
      </View>
      <View>
        <FlatList
          data={enviroments}
          renderItem={({item}) => (
            <EnviromentButton 
              title={item.title}          
              isActive={item.key === enviromentSelected}
              onPress={()=> (handleEnvironmentSelected(item.key))}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filterPlants}
          renderItem={({item}) => { 
            return <PlantCardPrimary
              data={item}
            /> 
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({distanceFromEnd}) => {
            handleFetchMore(distanceFromEnd);
          }}
          ListFooterComponent={
            loadingMore
            ? <ActivityIndicator color={colors.green}/>
            : <></>
          }
        />
      </View>
    </View>
  );
}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: fonts.text,
    color: colors.heading
  },
  listContainer: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

})