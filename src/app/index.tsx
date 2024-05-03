import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path } from 'react-native-svg';

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      {/* <Content /> */}
      <Footer />
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Welcome to Project ACME
            </Text>
            <Text className="mx-auto max-w-[700px] text-sm text-center text-gray-500 md:text-xl dark:text-gray-400">
              Discover and collaborate on amce. Explore our services now.
            </Text>

            <View className="gap-4">
              <Link
                suppressHighlighting
                className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/login"
              >
                Explore
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (

    <SafeAreaView style={{ paddingTop: top }}>
      <View className="flex flex-row items-center justify-between pt-5">
        <View className="px-4 lg:px-6 h-14">
          <Text className="font-mulishBold text-2xl ">Today</Text>
          <Text className="font-mulishRegular">Best platform for creating to-do lists</Text>
        </View>
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.4022 14.0801C20.7599 14.2701 21.0358 14.5701 21.23 14.8701C21.6081 15.4901 21.5775 16.2501 21.2096 16.9201L20.4942 18.1201C20.1161 18.7601 19.4109 19.1601 18.6853 19.1601C18.3277 19.1601 17.9291 19.0601 17.6021 18.8601C17.3364 18.6901 17.0298 18.6301 16.7027 18.6301C15.691 18.6301 14.8428 19.4601 14.8121 20.4501C14.8121 21.6001 13.8719 22.5001 12.6967 22.5001H11.3068C10.1213 22.5001 9.18113 21.6001 9.18113 20.4501C9.16069 19.4601 8.31247 18.6301 7.30073 18.6301C6.96348 18.6301 6.6569 18.6901 6.40141 18.8601C6.07438 19.0601 5.6656 19.1601 5.31813 19.1601C4.58232 19.1601 3.87717 18.7601 3.49905 18.1201L2.7939 16.9201C2.41577 16.2701 2.39533 15.4901 2.77346 14.8701C2.93697 14.5701 3.24356 14.2701 3.59102 14.0801C3.87717 13.9401 4.06112 13.7101 4.23486 13.4401C4.74584 12.5801 4.43925 11.4501 3.57059 10.9401C2.55885 10.3701 2.23182 9.10012 2.81434 8.11012L3.49905 6.93012C4.09178 5.94012 5.35901 5.59012 6.38097 6.17012C7.27007 6.65012 8.42488 6.33012 8.94608 5.48012C9.10959 5.20012 9.20157 4.90012 9.18113 4.60012C9.16069 4.21012 9.27311 3.84012 9.46728 3.54012C9.8454 2.92012 10.5301 2.52012 11.2761 2.50012H12.7171C13.4734 2.50012 14.1581 2.92012 14.5362 3.54012C14.7201 3.84012 14.8428 4.21012 14.8121 4.60012C14.7917 4.90012 14.8837 5.20012 15.0472 5.48012C15.5684 6.33012 16.7232 6.65012 17.6225 6.17012C18.6342 5.59012 19.9117 5.94012 20.4942 6.93012L21.1789 8.11012C21.7716 9.10012 21.4446 10.3701 20.4227 10.9401C19.554 11.4501 19.2474 12.5801 19.7686 13.4401C19.9321 13.7101 20.1161 13.9401 20.4022 14.0801ZM9.10959 12.5101C9.10959 14.0801 10.4075 15.3301 12.012 15.3301C13.6164 15.3301 14.8837 14.0801 14.8837 12.5101C14.8837 10.9401 13.6164 9.68012 12.012 9.68012C10.4075 9.68012 9.10959 10.9401 9.10959 12.5101Z" fill="#767E8C" />
        </Svg>
      </View>


    </SafeAreaView>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}
