#!/bin/bash

########################################################################
#	- This is the main script that is used to compile/interpret the source code
#	- The script takes 3 arguments
#		1. The compiler that is to compile the source file.
#		2. The source file that is to be compiled/interpreted
#		3. Additional argument only needed for compilers, to execute the object code
#	
#	- Sample execution command:   $: ./script.sh g++ file.cpp ./a.out
#	
########################################################################

compiler=$1
file=$2
output=$3
addtionalArg=$4


########################################################################
#	- The script works as follows
#	- It first stores the stdout and std err to another stream
#	- The output of the stream is then sent to respective files
#	
#	
#	- if third arguemtn is empty Branch 1 is followed. An interpretor was called
#	- else Branch2 is followed, a compiler was invoked
#	- In Branch2. We first check if the compile operation was a success (code returned 0)
#	
#	- If the return code from compile is 0 follow Branch2a and call the output command
#	- Else follow Branch2b and output error Message
#	
#	- Stderr and Stdout are restored
#	- Once the logfile is completely written, it is renamed to "completed"
#	- The purpose of creating the "completed" file is because NodeJs searches for this file 
#	- Upon finding this file, the NodeJS Api returns its content to the browser and deletes the folder
#
#	
########################################################################

exec  0> $"/usercode/errors_unit"

exec  1> $"/usercode/errors_unit"

exec  2> $"/usercode/errors_unit.txt"


START=$(date +%s.%2N)
$compiler /usercode/$file $addtionalArg #&> /usercode/errors_unit.txt
echo $compiler /usercode/$file

#exec 1>&3 2>&4

#head -100 /usercode/logfile_unit.txt
#touch /usercode/completed_unit
END=$(date +%s.%2N)
runtime=$(echo "$END - $START" | bc)


echo "*-COMPILEBOX::ENDOFOUTPUT-*" $runtime