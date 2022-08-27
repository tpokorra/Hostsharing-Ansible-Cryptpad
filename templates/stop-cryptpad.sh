#!/bin/bash
export HOME=/home/pacs/{{pac}}/users/{{user}}
export PID=$HOME/var/run/cryptpad.pid
cd $HOME
 
if [ -f $PID ] ; then 
    kill $( cat $PID );
    sleep 20 ;
    kill -9 $( cat $PID ) >/dev/null 2>&1 ;
    rm $PID ;
fi
