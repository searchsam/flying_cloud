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
# Download from https://developer.android.com/studio/index.html
$ wget https://dl.google.com/dl/android/studio/ide-zips/3.4.2.0/android-studio-ide-183.5692245-linux.tar.gz
$ unzip android-studio*.zip
$ sudo mv android-studio /opt/android-studio
# cd /opt/android-studio && ./bin/studio.sh
$ vim ~/.bashrc
# Add final
export ANDROID_HOME="/usr/lib/android/sdk/"
export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"
$ sudo $ANDROID_HOME/tools/bin/sdkmanager "tools" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
# Tools > SDK Manager | Download the android platform
# Tools > AVD Manager | Created a virtual device on android sdk
```

## Install NativeScript

```bashscript
$ sudo npm install nativescript -g --unsafe-perm
# tns doctor
```

## Run Emulator

```bashscript
$ ./$ANDROID_SDK/emulator/emulator -list-avds
$ ./$ANDROID_SDK/emulator/emulator -avd Nexus_5_API_28
```

Nada mas
