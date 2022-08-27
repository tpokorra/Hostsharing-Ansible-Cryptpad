#!/bin/bash
export HOME=/home/pacs/{{pac}}/users/{{user}}
export PID=$HOME/var/run/cryptpad.pid

source $HOME/.profile
cd $HOME/cryptpad
nohup node server > $HOME/var/log/cryptpad.log 2>&1 &
echo $! > $PID
