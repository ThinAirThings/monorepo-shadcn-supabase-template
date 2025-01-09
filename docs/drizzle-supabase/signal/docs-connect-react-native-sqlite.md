# Drizzle ORM with React Native SQLite

## Overview

To integrate Drizzle ORM with React Native applications, it is recommended to use the `Expo SQLite` library. This is due to compatibility issues with the Hermes JavaScript runtime, which is now the standard runtime for React Native and Expo.

## Compatibility

The commonly used library, [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage), does not support the Hermes JavaScript runtime. Therefore, it is not recommended for use with Drizzle ORM in React Native applications.

## Recommended Library

- **Expo SQLite**: Use this library to ensure compatibility with the Hermes runtime when running Drizzle ORM in React Native apps.