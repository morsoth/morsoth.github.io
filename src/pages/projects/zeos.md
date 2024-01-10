---
layout: "../../layouts/MDLayout.astro"
title: ZeOS
publishDate: 10/01/2024
---

## Previous steps

To run this basic OS you will first need to install some packages.

##### Install dependencies
```sh
sudo apt install bin86 libx11-dev libgtk2.0-dev libreadline-dev
```

##### Install bochs 2.6.7
Download bochs [here](https://sourceforge.net/projects/bochs/files/bochs/2.6.7/bochs-2.6.7.tar.gz/download).
Go to the folder where you downloaded bochs and extract the files:
```sh
tar xzvf bochs-2.6.7.tar.gz
cd bochs-2.6.7
```
Then run the following commands:
```sh
./configure --enable-gdb-stub --with-x --prefix=/opt/bochs_gdb
make all install
```

##### Add bochs to your `$PATH`
Add this line in your `.profile` file:
```sh
[ -d "/opt/bochs_gdb/bin" ] && PATH="/opt/bochs_gdb/bin:$PATH"
```

##### Clone and run ZeOS
Clone our gitlab repository:
```sh
git clone https://gitlab.com/Dorovich/zeos.git
```
Go to the project folder and run:
```sh
make emul
```

## Understanding a basic OS

WHY DO WE USE OS???

### ZeOS

???

## Building a basic OS

### Mechanisms to enter the system

We normally have 3 mechanisms to enter the system in a OS:
* Hardware interruptions
* Exceptions
* Syscalls

#### Interruption management

Although each mechanism has its own way of working, they share some common steps:



#### Hardware interruptions

#### Exceptions

#### System calls (syscalls)

### Processes

### Threads
