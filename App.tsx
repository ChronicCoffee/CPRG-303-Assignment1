import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const handleCustomPress = () => {
    Alert.alert("Video Loading...");
  };
  const handleAlertPress = () => {
    Alert.alert("Alert Button Pressed.");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="logo-youtube" size={32} color="red" />
          <Text style={styles.youtubeText}>YouTube</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          <TouchableOpacity
            style={[styles.categoryButton, styles.selectedCategory]}
          >
            <Text style={[styles.categoryText, styles.selectedCategoryText]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Gaming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>News</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Content Area */}
            <ScrollView style={styles.content}>
        {/* Video Item 1 */}
        <TouchableOpacity onPress={handleCustomPress}>
          <View style={styles.videoItem}>
            <Image
              source={require('./assets/placeholder-1.jpg')}
              style={styles.thumbnail}
            />
            <View style={styles.videoTime}>
              <Text style={styles.timeText}>15:48</Text>
            </View>
            <View style={styles.videoDetails}>
              <View style={styles.videoText}>
                <Text style={styles.videoTitle} numberOfLines={2}>
                  Heading to a Local Camera Shop in NYC!!
                </Text>
                <Text style={styles.channelName}>Photoflics</Text>
                <Text style={styles.videoMeta}>50K views • 1 week ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Video Item 2 */}
        <TouchableOpacity onPress={handleCustomPress}>
          <View style={styles.videoItem}>
            <Image
              source={require('./assets/placeholder-2.jpg')}
              style={styles.thumbnail}
            />
            <View style={styles.videoTime}>
              <Text style={styles.timeText}>1:20:36</Text>
            </View>
            <View style={styles.videoDetails}>
              <View style={styles.videoText}>
                <Text style={styles.videoTitle} numberOfLines={2}>
                  Night Time Adventure in Chicago
                </Text>
                <Text style={styles.channelName}>City Travel</Text>
                <Text style={styles.videoMeta}>250K views • 2 months ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Video Item 3 */}
        <TouchableOpacity onPress={handleCustomPress}>
          <View style={styles.videoItem}>
            <Image
              source={require('./assets/placeholder-3.png')}
              style={styles.thumbnail}
            />
            <View style={styles.videoTime}>
              <Text style={styles.timeText}>23:12</Text>
            </View>
            <View style={styles.videoDetails}>
              <View style={styles.videoText}>
                <Text style={styles.videoTitle} numberOfLines={2}>
                  Exploring Hidden Spots in Tokyo!
                </Text>
                <Text style={styles.channelName}>TravelVlogs</Text>
                <Text style={styles.videoMeta}>120K views • 3 weeks ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Video Item 4 */}
        <TouchableOpacity onPress={handleCustomPress}>
          <View style={styles.videoItem}>
            <Image
              source={require('./assets/placeholder-4.png')}
              style={styles.thumbnail}
            />
            <View style={styles.videoTime}>
              <Text style={styles.timeText}>5:45</Text>
            </View>
            <View style={styles.videoDetails}>
              <View style={styles.videoText}>
                <Text style={styles.videoTitle} numberOfLines={2}>
                  Easy Cooking Recipes for Beginners
                </Text>
                <Text style={styles.channelName}>ChefMaster</Text>
                <Text style={styles.videoMeta}>300K views • 1 month ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Alert Button */}
        <TouchableOpacity 
          style={styles.alertButton}
          onPress={handleAlertPress}
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>


    {/* Footer Navigation */}
    <View style={styles.footer}>
            <View style={styles.footerContent}>
              <TouchableOpacity style={styles.footerTab}>
                <Ionicons name="home" size={24} color="black" />
                <Text style={styles.footerText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerTab}>
                <Ionicons name="film-outline" size={24} color="black" />
                <Text style={styles.footerText}>Shorts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerTabCenter}>
                <Ionicons name="add-circle-outline" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerTab}>
                <Ionicons name="play-circle-outline" size={24} color="black" />
                <Text style={styles.footerText}>Subscriptions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerTab}>
                <Ionicons name="person-outline" size={24} color="black" />
                <Text style={styles.footerText}>You</Text>
              </TouchableOpacity>
            </View>
          </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F", // Dark background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 8 : 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#282828", // Dark border
    marginTop: Platform.OS === "android" ? 24 : 0,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  youtubeText: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "700",
    color: "#FFFFFF", // White text
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconButton: {
    padding: 8,
  },
  categoriesContainer: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#282828",
  },
  categories: {
    paddingHorizontal: 12,
    alignItems: "center",
    height: "100%",
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#282828", // Dark button background
    marginHorizontal: 4,
    height: 32,
    justifyContent: "center",
    marginVertical: 8,
  },
  selectedCategory: {
    backgroundColor: "#FF0000", // YouTube red for selected category
  },
  categoryText: {
    color: "#AAAAAA", // Lighter gray for text
    fontSize: 14,
  },
  selectedCategoryText: {
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#282828",
    backgroundColor: "#0F0F0F",
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  footerTab: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 8,
  },
  footerTabCenter: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 4,
  },
  footerText: {
    fontSize: 10,
    marginTop: 4,
    color: "#FFFFFF",
  },
  videoItem: {
    marginBottom: 16,
  },
  thumbnail: {
    width: "100%",
    height: 200,
    backgroundColor: "#282828",
  },
  videoTime: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 4,
    borderRadius: 4,
  },
  timeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  videoDetails: {
    flexDirection: "row",
    padding: 12,
  },
  videoText: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    color: "#FFFFFF",
  },
  channelName: {
    fontSize: 12,
    color: "#AAAAAA",
    marginBottom: 2,
  },
  videoMeta: {
    fontSize: 12,
    color: "#AAAAAA",
  },
  alertButton: {
    backgroundColor: "#FF0000",
    padding: 12,
    alignItems: "center",
    marginHorizontal: 150,
    marginVertical: 8,
    borderRadius: 8,
  },
  alertButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
