include makehead
include makemain
include makelibs

ODIR = ./build
OUTPUT = ${ODIR}/build.js
TERSER_ARGS = -c -m --comments all
TERSER = terser
CAT = cat
RM = rm -rf 
MKDIR = mkdir
link : ${HEAD} ${LIBS} ${PRE} ${MAIN}
	${MAKE} clean
	${MKDIR} ${ODIR}
	${CAT} ${HEAD} ${PRE} ${LIBS} ${MAIN} > ${OUTPUT}
	${TERSER} ${OUTPUT} ${TERSER_ARGS} --name-cache ${OUTPUT}.map -o ${OUTPUT}
clean :
	${RM} ${ODIR}