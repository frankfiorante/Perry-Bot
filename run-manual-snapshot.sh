#!/bin/sh

ssh admin@"$PI_ADDR" << EOF
	echo "Taking manual screenshot"
	curl -s -o /dev/null "http://127.0.0.1:7999/0/action/snapshot"
	exit
EOF