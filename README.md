# Flying Cloud

A flying feature

## Install NodeJS

```bashscript
$ sudo dnf -y install nodejs npm
```

## Install C++ compiler

```bashscript
$ sudo dnf -y install gcc-c++
```

## Install JDK

```bashscript
$ sudo dnf -y install java-1.8.0-openjdk, java-1.8.0-openjdk-devel
$ sudo update-alternatives --config java
$ vim ~/.bashrc
# Add final
export JAVA_HOME= "/usr/lib/jvm/" + "java-1.8.0-openjdk" (java package installed name)
```

## Install Android SDK

```bashscript
$ sudo dnf install glibc.i686 glibc-devel.i686 libstdc++.i686 zlib-devel.i686 ncurses-devel.i686
```

Download from <https://developer.android.com/studio/index.html> and in the SDK Tools Only section download the package for Linux at the bottom of the page.

For all SDK Studio

```bashscript
$ wget https://dl.google.com/dl/android/studio/ide-zips/3.4.2.0/android-studio-ide-183.5692245-linux.tar.gz
$ unzip android-studio*.zip
$ sudo mv android-studio /opt/android-studio
$ sudo cd /opt/android-studio && ./bin/studio.sh
```

From SDK Tools Only

```bashscript
$ wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
$ unzip sdk-tools-linux-*.zip
$ sudo mkdir /usr/lib/android/sdk/
$ sudo mv tools /usr/lib/android/sdk/tools
```

Add Environment vars

```bashscript
$ vim ~/.bashrc
export ANDROID_HOME="/usr/lib/android/sdk/"
export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"
$ sudo touch /root/.android/repositories.cfg
$ sudo $ANDROID_HOME/tools/bin/sdkmanager "tools" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
$ cd $ANDROID_HOME/tools/bin
$ sudo ./sdkmanager "system-images;android-28;google_apis;x86"
$ sudo ./avdmanager create avd -n test -k "system-images;android-28;google_apis;x86" -d "Nexus 4"
```

## Install NativeScript

```bashscript
$ sudo npm install nativescript -g --unsafe-perm
$ tns doctor
```

## Run Emulator

```bashscript
$ cd $ANDROID_SDK/emulator/ && ./emulator -list-avds
$ cd $ANDROID_SDK/emulator/ && ./emulator -avd device_name # Name from avd list
```

## Create a app

```bashscript
$ tns create <name> # choose your favorite languaje or framework
$ tns run android --hmr
```
