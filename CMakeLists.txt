cmake_minimum_required(VERSION 3.27)
project(leetcode)

set(CMAKE_CXX_STANDARD 14)


file(GLOB_RECURSE SOURCES "./*.cpp")
list(LENGTH SOURCES SOURCES_COUNT)
set(INDEX 0)
foreach (SOURCE ${SOURCES})
    math(EXPR INDEX "${INDEX}+1")
    get_filename_component(EXECUTABLE_NAME ${SOURCE} NAME_WE)
    add_executable(${EXECUTABLE_NAME}${INDEX} ${SOURCE})
endforeach ()

