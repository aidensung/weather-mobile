import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#373B44', '#4286f4'],
    title: 'Thunderstormy',
    subtitle: 'Keep safe at home',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#000C40', '#F0F2F0'],
    title: 'Drizzly',
    subtitle: 'Take your umbrella',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#373B44', '#73C8A9'],
    title: 'Rainy',
    subtitle: 'Take your umbrella',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#9ca09c', '#ffffff'],
    title: 'Snowy',
    subtitle: 'Build a snowman!',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#1FA2FF', '#12D8FA', '#a8f9ff'],
    title: 'Clear',
    subtitle: "Let's hang out!",
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#37324d', '#928dab'],
    title: 'Cloudy',
    subtitle: 'So gloomy',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#83a4d4', '#b5baba'],
    title: 'Misty',
    subtitle: "Can't see anything",
  },
  Smoke: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Smoky',
    subtitle: "Just don't go outside",
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#4389A2', '#5C258D'],
    title: 'Hazy',
    subtitle: 'Not bad, not good',
  },
  Dust: {
    iconName: 'weather-fog',
    gradient: ['#DECBA4', '#FBD786'],
    title: 'Dusty',
    subtitle: "Don't forget to put your mask on",
  },
  Fog: {
    iconName: 'weather-fog',
    gradient: ['#B993D6', '#8CA6DB'],
    title: 'Foggy',
    subtitle: "Can't see anything",
  },
  Sand: {
    iconName: 'weather-fog',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'Sandy',
    subtitle: "Don't forget to put your mask on",
  },
  Ash: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Ashy',
    subtitle: 'Not good at all',
  },
  Squall: {
    iconName: 'weather-windy-variant',
    gradient: ['#360033', '#0b8793'],
    title: 'Squally',
    subtitle: "Just don't go outside",
  },
  Tornado: {
    iconName: 'weather-tornado',
    gradient: ['#360033', '#0b8793'],
    title: 'Tornado',
    subtitle: 'Keep safe at home',
  },
};

export default function Weather({ condition, temp, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color='white'
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.cityName}>{name}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Clear',
    'Clouds',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Ash',
    'Squall',
    'Tornado',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 62,
    fontWeight: '300',
    color: 'white',
  },
  cityName: {
    fontSize: 28,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    width: '90%',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
});
