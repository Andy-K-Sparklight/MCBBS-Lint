include makehead
include makemain
include makelibs
include makemodules

ODIR = ./build
TERSER_ARGS = -c -m --comments all
TERSER = terser
CAT = cat
RM = rm -rf
NPM = npm
MKDIR = mkdir
link : ${HEAD} ${LIBS} ${PRE} ${MAIN} ${MODULES}
	${MAKE} clean
	${MKDIR} ${ODIR}
	${CAT} ${HEAD} ${PRE} ${LIBS} ${MODULES} ${MAIN} > ${ODIR}/build.js
	${TERSER} ${ODIR}/build.js ${TERSER_ARGS} --name-cache ${ODIR}/build.min.js.map -o ${ODIR}/build.min.js
clean :
	${RM} ${ODIR}
idep :
	${NPM} install ${TERSER} -g