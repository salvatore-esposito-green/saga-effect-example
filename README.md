# Saga Effect Example

This is a example of how create a saga effects with some different flows.

Open your devtool and explore

## async Saga

Saga is always asynchronous

## differences between takeEvery vs takeLast

Saga can management the concurrency actions

## fork

With fork you can call a non-blocking fc 

normally each iterator waits for the previous task to be completed to continue

With fork the flow go on

## linear flow vs parallel flow

normally every tasks is reproduced with a linear flow, task by task

there is a method for invoke a parallel flow and some tasks go on simultaneously

## race 

in some flow you want that there is only one winner action

in this case you can use a race between two or more tasks

when the first is finish, all the others are blokcked

## login flow

there is a small example for the login work flow

because is peculiarity, like a while cycle that produce a non-blocking call until an other action like 'logout' or 'failure' was called
