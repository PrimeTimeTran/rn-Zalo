# Week 4 - Lab - **Zalo Navigation**

## Introduction 🌟

Let's build a new app 📱 using [React Native](https://facebook.github.io/react-native/) & [Expo](https://expo.io/). We're going to clone Zalo. Our app will help users see a lot of unique content based on what it is they're looking for. This will require the use of a library called [React Navigation](https://reactnavigation.org/) that comes with Expo.

![pwd](https://i.imgur.com/HtHBzqx.jpg)

### Features 🎯🥇🏆

- [ ] User can see tabs at the bottom of the screen.
- [ ] User can press a tab to navigate to a unique screen.
- [ ] User can see tabs which corresponds to the tabs of Zalo.
- [ ] User can see a `Messsages` screen which has many messages.
- [ ] User can press on an individual message to navigate to a `Conversation` screen.
- [ ] User can see information about the user whose message they pressed on arriving at the `Conversation` screen.
- [ ] User can see an icon on the `Messages` screen which when pressed, opens a `Drawer`.
- [ ] User can see additional navigation items when they **open** the `Drawer`.

### Learning Objectives ✍️📚📝

1. Learn how to create multiple screens.
    - Recognize any meaningful app has content hidden in different parts of the app; and that users need a way to **get to** that content.

2. Learn how to use [React Navigation](https://reactnavigation.org/).
    - Recognize this is a library we get with Expo which has the responsibility of handling navigation.
3. Learn how to customize the default navigator of Expo.
    - Recognize the default n`avigator is a boilerplate setup which we can build off of.

4. Learn how to use the `navigation` prop provided by React Navigation to our screen components.
   - Recognize it's an object with a lot of useful keys.

> **Tip** 💡: Screens give us a way to provide a lot of content to our users for their consumption whether it's for work or play. Structuring the screens in a meaningful and easily understood way is called [information architecture](https://en.wikipedia.org/wiki/Information_architecture).

### **Milestone 1 🛣🏃 Setup initial screens**

**A)** Use `expo init` to generate a new project. I'm calling mine `rn-zalo`. This time however, choose the **tabs** option when prompted.

![pwd](https://i.imgur.com/KdO1Kd3.png)

#### We should now see a new boiler plate app when we open our simulator that has 3 default tabs at the bottom, `Home`, `Links`, & `Settings`

![pwd](https://i.imgur.com/5wXJJMO.png)

> **Tip** 💡: This project has a lot of stuff setup for you. Poke around the inital code for a minute or two to see how the team at Facebook likes structuring their projects. You'll learn a lot!

**B)** Refactor first tab.

We're going to need 5 screens `Messsages`, `Contacts`, `Groups`, `Timeline`, & `More` eventually. Let's start with `Messages`.

Open up the `./navigation/MainTabNavigator.js` file and look for the following line.

```jsx
import HomeScreen from "../screens/HomeScreen";
```

Then change it to

```jsx
import MessagesScreen from "../screens/MessagesScreen";
```

We're changing the component we're importing and where we're importing from in order to be more explicit to our future teammates.

**C)** Change the places where `HomeScreen` was previously used and change it to correspond to the new value(`Messages`). There are other keys/variables we should change as well in order to be consistent

```jsx
const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen
  },
  config
);
```

This is a [Stack Navigator](https://reactnavigation.org/docs/en/stack-navigator.html). Stack navigators can be thought of as screens on top of each other. We can put a new screen onto our Stack as well as remove them.

![Stack Navigator](http://mcgivery.com/wp-content/uploads/2015/12/stack.png)

```jsx
MessagesStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatbubbles" : "android-messages"}
    />
  )
};
```

Here were defining our [Navigation Options](https://reactnavigation.org/docs/en/navigation-options-resolution.html#docsNav). Specifically, what the tab says and what icon is displayed at the bottom of the screen.

```jsx
MessagesStack.path = "";

// ... code ..

const tabNavigator = createBottomTabNavigator({
  MessagesStack
});
```

**D)** Update the name of the file from `./screens/HomeScreen.js` to `./screens/MessagesScreen.js`

Everything should continue working, however our `Home` tab should be updated to `Messsages` and should display a different icon, _incredible_.

![pwd](https://i.imgur.com/F8DdIOH.gif)

**E)** Delete everything in `MessagesScreen.js` and refactor to get a blank screen with minimaltext, `Messages Screen`.

<details>

<summary>Refactored Messages Screen</summary>

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
}

MessagesScreen.navigationOptions = {
  title: "Messages"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
```

</details>

![pwd](https://i.imgur.com/WNassZC.png)
There's nothing fancy going on here. Just a few required imports, a functional component defined, styles, and an additional [Navigation Options](https://reactnavigation.org/docs/en/redux-integration.html#what-about-navigationoptions) for this individual screen.

Take note of the following lines.

```jsx
MessagesScreen.navigationOptions = {
  title: "Messages"
};
```

The value of the `title` key corresponds to the header we see at the top of the screen. There are other options as well which we'll soon work with.

**F)** Repeat for `Contacts` & `Groups`.

For these two, we'll rename the files, import, definitions, and appropriate variables to correspond to this content it will hold like we did with `Home` => `Messages`.

<details>

<summary>LinksScreen => ContactsScreen</summary>

```jsx
// ./navigation/MainTabNavigator.js
import ContactsScreen from "../screens/ContactsScreen";
```

```jsx
// ./navigation/MainTabNavigator.js
const ContactsStack = createStackNavigator(
  {
    Contacts: ContactsScreen
  },
  config
);

ContactsStack.navigationOptions = {
  tabBarLabel: "Contacts",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contacts" : "md-link"}
    />
  )
};

ContactsStack.path = "";
```

```jsx
// ./screens/ContactsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ContactsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Contacts Screen</Text>
    </View>
  );
}

ContactsScreen.navigationOptions = {
  title: "Contacts"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
```

</details>

<details>

<summary>SettingsScreen => GroupsScreen</summary>

```jsx
// ./navigation/MainTabNavigator.js
import GroupsScreen from "../screens/GroupsScreen";
```

```jsx
// ./navigation/MainTabNavigator.js
const GroupsStack = createStackNavigator(
  {
    Groups: GroupsScreen
  },
  config
);

GroupsStack.navigationOptions = {
  tabBarLabel: "Groups",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-people" : "md-options"}
    />
  )
};

GroupsStack.path = "";
```

```jsx
// ./screens/GroupsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GroupsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Groups Screen</Text>
    </View>
  );
}

GroupsScreen.navigationOptions = {
  title: "Groups"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
```

</details>

**G)** Update the `createBottomNavigator` in `./navigation/MainTabNavigator.js` as well.

```jsx
const tabNavigator = createBottomTabNavigator({
  MessagesStack,
  ContactsStack,
  GroupsStack
});
```

![pwd](https://i.imgur.com/fKDx0lJ.gif)

This code will take our 3 stack navigators and consolidate them into a single [Tab Navigator](https://reactnavigation.org/docs/en/tab-based-navigation.html).

---

> **Key Points** 🔑📝

- Our apps will need many different screens to show different content.
- There are `Stack` & `Tab` navigators to help us handle this.
- Navigation Options can be used to customize text, icons, and colors.
- [React Navigation](https://reactnavigation.org/en/) is a set of configurations that come in the shape of `Objects`, `keys`, & `Components`.

---

### **Milestone 2 🛣🏃 Add additional screens and `MessagesScreen` messages**

**A)** Add two new tabs that correspond to Zalo's `Timeline` & `More` screens.

<details>

<summary>Timeline tab</summary>

```jsx
// ./navigation/MainTabNavigator.js
import TimelineScreen from "../screens/TimelineScreen";
```

```jsx
// ./navigation/MainTabNavigator.js
const TimelineStack = createStackNavigator(
  {
    Timeline: TimelineScreen
  },
  config
);

TimelineStack.navigationOptions = {
  tabBarLabel: "Timeline",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-bookmarks" : "md-options"}
    />
  )
};

TimelineStack.path = "";

const tabNavigator = createBottomTabNavigator({
  MessagesStack,
  ContactsStack,
  GroupsStack,
  TimelineStack
});
```

```jsx
// ./screens/TimelineScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TimelineScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Timeline Screen</Text>
    </View>
  );
}

TimelineScreen.navigationOptions = {
  title: "Timeline"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
```

</details>

<details>

<summary>More tab</summary>

```jsx
// ./navigation/MainTabNavigator.js
import MoreScreen from "../screens/MoreScreen";
```

```jsx
// ./navigation/MainTabNavigator.js
const MoreStack = createStackNavigator(
  {
    More: MoreScreen
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: "More",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

MoreStack.path = "";

const tabNavigator = createBottomTabNavigator({
  MessagesStack,
  ContactsStack,
  GroupsStack,
  TimelineStack,
  MoreStack
});
```

```jsx
// ./screens/MoreScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MoreScreen(props) {
  return (
    <View style={styles.container}>
      <Text>More Screen</Text>
    </View>
  );
}

MoreScreen.navigationOptions = {
  title: "More"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
```

</details>

![pwd](https://i.imgur.com/UfEukDf.gif)
We should now see that we've got 5 tabs. 2 of these tabs we made ourselves, _excellent_.

**B)** Get data for `MessagesScreen`.

Copy [this gist](https://gist.github.com/PrimeTimeTran/b54fdc9a8f4ab7f7e8796560944bdf2b) and paste it to a file called `messages.json` in the **root** of your project.

**C)** Import the data into the `MessagesScreen` for consumption.

```jsx
import messages from "../messages.json";
```

**D)** Define a new component, `MessageCard`, which will be responsible for rendering the content for each message to a beautiful card.

<details>

<summary>MessageCard Component</summary>

```jsx
// ./components/MessageCard.js
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const MessageCard = props => (
  <TouchableOpacity
    onPress={() => props.onGoToConversation("Conversation", { ...props })}
  >
    <View style={styles.messageCardStyle}>
      <View>
        <Image style={styles.image} source={{ uri: props.uri }} />
      </View>
      <View style={styles.cardTextContainer}>
        <View style={styles.cardText}>
          <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
          <Text>{props.last_message_date}</Text>
        </View>
        <Text numberOfLines={3}>{props.last_message_content}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default MessageCard;

const styles = StyleSheet.create({
  messageCardStyle: {
    margin: 5,
    padding: 5,
    width: "100%",
    shadowRadius: 5,
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 }
  },
  image: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderRadius: 37,
    borderColor: "grey"
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 10
  },
  cardText: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
```

</details>

#### Take note of the following line of code.

```jsx
<TouchableOpacity
  onPress={() => props.onGoToConversation('Conversation', { ...props })}
>
```

We'll implement navigating to the `Conversation` component by passing a `prop`, `onGoToConversation`, to `MessageCard` shortly.

- The prop `onGoToConversation` is a function.
- The **1st** argument of this function is the `key` of the Screen we want to navigate to.
- The **2nd** is an object. The object contains all the props sent to `MessageCard` via a [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
- The `object` we pass as the second argument will end up as props in the destination component, the value of the `Conversation` **key/argument**.

**E)** Refactor `MessagesScreen` to use the `component` we just defined, `MessageCard`.

<details>

<summary>MessagesScreen</summary>

```jsx
// ./screens/MessagesScreen.js
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import MessageCard from "../components/MessageCard";

import messages from "../messages.json";

export default function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {messages.map(msg => {
          return (
            <MessageCard
              key={msg.id}
              name={msg.first_name}
              uri={msg.avatar_url}
              last_message_date={msg.last_message_date}
              last_message_content={msg.last_message_content}
              onGoToConversation={props.navigation.navigate}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

MessagesScreen.navigationOptions = {
  title: "Messages"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  messageCardStyle: {
    margin: 5,
    padding: 5,
    width: "100%",
    shadowRadius: 5,
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 }
  },
  image: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderRadius: 37,
    borderColor: "grey"
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 10
  },
  cardText: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
```

</details>

Look at the prop `onGoToConversation` we pass to `MessageCard` component.

```jsx
onGoToConversation={props.navigation.navigate}
```

#### There is something we have to **memorize** about React Navigation.

Any component which is listed as a key's value in our `MainTabNavigator` file will automatically be passed a `prop` called `navigation`.

This is a tremendously useful prop. Spend a few minutes reading about all the valuable data passed into it [here](https://reactnavigation.org/docs/en/navigation-prop.html).

This prop will allow us to navigate, pass props, and view the state of our app in terms of **where** the user is.

> **Key Points** 🔑📝

- Creating a new tab is as simple as defining a new component and then passing it to our [Navigators](https://medium.com/@rossbulat/introduction-to-react-navigation-and-navigators-in-react-native-3efcf7239a43).
- React Navigation passed all screen components a prop called `navigation`.
- The `navigation` prop provides us with a lot of useful methods such as `navigate`.

---

### **Milestone 3 🛣🏃 Implement behavior where a user can navigate to a specific conversation and see pertinent content**

**A)** Define a new component, `ConversationScreen`, which will represent a private conversation our user has with another user.

```jsx
// ./screens/ConversationScreen.js
import React from "react";
import { Image, Text, ScrollView, StyleSheet } from "react-native";

export default function ConversationScreen(props) {
  const propsFromMessages = props.navigation.state.params;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image
        source={{ uri: propsFromMessages.uri }}
        style={{
          width: 200,
          height: 200
        }}
      />
      <Text>{props.navigation.state.params.name}</Text>
      <Text>{props.navigation.state.params.last_message_content}</Text>
    </ScrollView>
  );
}

ConversationScreen.navigationOptions = {
  title: "Conversation"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});
```

**B)** Import the component into `./navigators/MainTabNavigator.js`

```jsx
import ConversationScreen from "../screens/ConversationScreen";
```

**C)** Define a new key, `Conversation`, in the `MessagesStack` where the value is the component we just imported, `ConversationScreen`.

```jsx
const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
    Conversation: ConversationScreen
  },
  config
);
```

The reason we place the definition in the `MessagesStack` is because the user navigates to the `ConversationScreen` component from the `MessagesScreen`; a screen in the `MessagesStack`.

We should now be able to navigate to the `ConversationScreen` from our `MessagesScreen` when we press on a single card.

![pwd](https://i.imgur.com/4q7wAAq.gif)

Notice that when we tap on `Carmelina` we navigate to a `ConversationScreen` which has data corresponding to `Carmelina`. The same thing occurs when we press on `Guntar`; _excellent_.

### **Milestone 4 🛣🏃 Implement Drawer Navigation & MessagesScreen Hamburger Menu**

**A)** Import a few dependencies we'll need soon into `./navigation/MainTabNavigator.js`

```jsx
import { Text, View, Platform } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
```

**B)** Scroll to the bottom of this file and delete this line.

```jsx
export default tabNavigator;
```

**C)** Define a new export for this file.

Define a new component at the bottom of this file, `Drawer`, then call the `createDrawerNavigator` function we imported to define a new const `drawer`. This `drawer` will be our default export now. Notice that the `createDrawerNavigator` takes two arguments, both objects. Learn more about how to use the drawer component [here](https://reactnavigation.org/docs/en/drawer-navigator.html).

```jsx
const Drawer = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Drawer Item 1</Text>
    <Text>Drawer Item 2</Text>
  </View>
);

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;
```

#### We should now see that if we swipe from the left part of the screen to the right, a drawer opens, _amazing_.

![pwd](https://i.imgur.com/zYEJ8bv.gif)

**D)** Import new dependencies so we can add the hamburger menu to `MessagesScreen`.

```jsx
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
```

**E)** Refactor the `MessagesScreen.navigationOptions` in the `MessagesScreen`. We warned ya this was gonna get more complicated =).

```jsx
MessagesScreen.navigationOptions = props => {
  return {
    title: "Messages",
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Image
            style={{ height: 20, width: 20, marginLeft: 10 }}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
            }}
          />
        </TouchableOpacity>
      );
    }
  };
};
```

#### We should now see that everything works as expected, _yay_

![pwd](https://i.imgur.com/lmsYHKs.gif)

## Review 💻🤓🤔

- Screen navigation is important to providing an engaging experience for users.
- A `Stack Navigator` has screens stacked one on top of the other. We can go "down" and "up"
- A `Tab Navigator` has tabs at the bottom of the screen.
- A `Drawer Navigator` has a drawer that's hidden away from view until a user wants access to it.
- Screens defined in our Navigators are all passed a `prop` from React Navigation called `navigation`.
- The `navigation` prop is very useful prop because the object has many useful key's that we'll need in the future.
- **Navigation Options** is how we'll customize headers, icons, display text, & etc. for our navigators.

### Accomplishments 🥇🏆💯

- [x] User can see tabs at the bottom of the screen.
- [x] User can press a tab to navigate to a unique screen.
- [x] User can see tabs which corresponds to the tabs of Zalo.
- [x] User can see a `Messsages` screen which has many messages.
- [x] User can press on an individual message to navigate to a `Conversation` screen.
- [x] User can see information about the user whose message they pressed on arriving at the `Conversation` screen.
- [x] User can see an icon on the `Messages` screen which when pressed, opens a `Drawer`.
- [x] User can see additional navigation items when they **open** the `Drawer`.

### Rockets 🚀

- [ ] User can press on a a users profile image inside of the `Messages` screen to be directed to a profile screen.
- [ ] User can press a link within their drawer to go to a `Settings` screen.
