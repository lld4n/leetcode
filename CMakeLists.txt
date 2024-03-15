cmake_minimum_required(VERSION 3.27)
project(leetcode)

set(CMAKE_CXX_STANDARD 14)


file(GLOB_RECURSE SOURCES "./*.cpp")
list(LENGTH SOURCES SOURCES_COUNT)
set(INDEX 0)
foreach (SOURCE ${SOURCES})
    math(EXPR INDEX "${INDEX}+1")
    get_filename_component(EXECUTABLE_NAME ${SOURCE} NAME_WE)
    add_executable(${INDEX}_${EXECUTABLE_NAME} ${SOURCE})
endforeach ()

#set(BUILD_1 main)
#set(SOURCE_FILES_1 другое/тинькофф.аисд/4/G.cpp)
#add_executable(${BUILD_1} ${SOURCE_FILES_1})

#file(GLOB_RECURSE SOURCES "./*.cpp")
#foreach (SOURCE ${SOURCES})
#    get_filename_component(EXECUTABLE_NAME ${SOURCE} NAME_WE)
#    add_executable(${EXECUTABLE_NAME} ${SOURCE})
#endforeach ()
#message("Список исходных файлов: ${SOURCES}")
#FILE(GLOB MyCSources "*.cpp")
#ADD_EXECUTABLE(leetcode ${MyCSources})

#file(GLOB SOURCES "./*.cpp")
#

#
#foreach (SOURCE ${SOURCES})
#    get_filename_component(EXECUTABLE_NAME ${SOURCE} NAME_WE)
#    add_executable(${EXECUTABLE_NAME} ${SOURCE})
#    add_custom_target(run_${EXECUTABLE_NAME}
#            COMMAND ${EXECUTABLE_NAME}
#            DEPENDS ${EXECUTABLE_NAME}
#            WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
#    )
#endforeach ()