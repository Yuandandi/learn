let SessionLoad = 1
if &cp | set nocp | endif
let s:cpo_save=&cpo
set cpo&vim
inoremap <F5> =ListMonths()
inoremap <silent> <F6> :set filetype=javascript.jsxa
inoremap <silent> <F7> :set filetype=htmla
inoremap <C-G>p yiwA = p_yiwopA.
cnoremap <M-i> <Home><Right>
cnoremap <M-h> <Left>
cnoremap <M-l> <Right>
inoremap <M-O> O
inoremap <M-o> o
inoremap <M-l> <Right>
inoremap <F4> =strftime("%c")
inoremap <M-a> A 
inoremap <C-B> bz=1A
inoremap <M-z> :wq
inoremap <C-L> yypkA
vnoremap  :wgv
nnoremap  :w
nnoremap  zz
nnoremap <NL> <Cmd>cprevzz
nnoremap  <Cmd>cnextzz
nnoremap  yyp
vnoremap  :wgv
nnoremap  :w
nnoremap  3 yiw:vs ~/.config/nvim/lua/dandi/abbrev/html.lua}}}Oautocmd FileType html ia <buffer> pa p2b3ldevip:sort:wq
nnoremap  2 _v$y:e ~/.config/nvim/lua/dandi/abbrev/javascript.lua}}Oautocmd FileType javascript ia <buffer> phi 
nnoremap  bd :w:bd
nnoremap  fn :FZF ~/repos/github.com/yuandandi/notes/
nnoremap  fv :FZF ~/.vim/
nnoremap  fc :FZF ~/clone/
nnoremap  fl :FZF ~/repos/github.com/yuandandi/learn/
nnoremap  ff :FZF
nnoremap  fo :FZF ~
nnoremap  x <Cmd>!chmod +x %
nnoremap  sl :s/\<\>//gI<Left><Left><Left>
vnoremap  sc :%s/\<\>//gc<Left><Left><Left>
nnoremap  sc :%s/\<\>//gc<Left><Left><Left>
vnoremap  si :%s/\<\>//gI<Left><Left><Left>
nnoremap  si :%s/\<\>//gI<Left><Left><Left>
nnoremap  j <Cmd>lprevzz
nnoremap  k <Cmd>lnextzz
nnoremap  ltf :%s/\(.*\), \(.*\)/\2,\1/:%s/,/ /
nnoremap  dd :le:s/ /", "/gI"<End>"=ipg;
nnoremap  ss :le:s/ /', '/gI'<End>'=ipg;
nnoremap  dk :s/, /", "/gI"<End>"
nnoremap  sk :s/, /', '/gI'<End>'
nnoremap  su !ipsort -u
nnoremap  so :w:source $MYVIMRC
xnoremap  d "_d
nnoremap  Y "+Y
nnoremap  e :Ex
vnoremap  gy "+y
nnoremap  gy "+y
xnoremap  p "_dP
nnoremap  i yi":!feh "
nnoremap !% :%!
nnoremap 0 0:w
vnoremap : ;
nnoremap : ;
vnoremap ; :
nnoremap ; :
cnoremap é <Home><Right>
cnoremap è <Left>
cnoremap ì <Right>
inoremap Ï O
inoremap ï o
inoremap ì <Right>
inoremap á A 
inoremap ú :wq
vnoremap E $
nnoremap E $
nnoremap J mzJ`z
vnoremap J :m '>+1gv=gv
vnoremap K :m '<-2gv=gv
nnoremap N Nzzzv
nnoremap Q ZQ
nnoremap Y y$
nnoremap Z :wq!
nmap <silent> [e <Plug>(ale_previous_wrap)
nmap <silent> ]e <Plug>(ale_next_wrap)
nnoremap c> ct>
nnoremap cm O;<Left>
nnoremap cp cip
nnoremap c' /'ci'
nnoremap c" /"ci"
nnoremap cL /}ci{
nnoremap ch /[ci[
nnoremap cl /(ci(
nnoremap cJ /'ci'
nnoremap c; ct;
nnoremap cj <Right><Right>/"ci"
nnoremap cK ciW
nnoremap ck ciw
nnoremap co Oj
nnoremap d= d+
nnoremap d> dt>
nnoremap dW :%s/\s*$//g
nnoremap dw ggVG:norm g_lD
nnoremap dL /(di{
nnoremap dh /[di[
nnoremap dl /(di(
nnoremap dJ /'ci'
nnoremap d; !!sh
nnoremap dj /"di"
nnoremap dK daW
nnoremap dk daw
nnoremap e V=ip:wgv
nnoremap gca A // 
xmap gx <Plug>NetrwBrowseXVis
nmap gzz <Plug>TitlecaseLine
xmap gz <Plug>Titlecase
nmap gz <Plug>Titlecase
nmap gcu <Plug>Commentary<Plug>Commentary
nmap gcc <Plug>CommentaryLine
omap gc <Plug>Commentary
nmap gc <Plug>Commentary
xmap gc <Plug>Commentary
nnoremap gotf :put =expand('%:p')
nnoremap g' viwA'gvoi'
nnoremap g" viwA"gvoi"
nnoremap g{ viwA}gvoi{
nnoremap g( viwA)gvoi(
nnoremap g[ viwA]gvoi[
vnoremap g" A"gvoi"
vnoremap g' A'gvoi'
vnoremap g{ A}gvoi{
vnoremap g( A)gvoi(
vnoremap g[ A]gvoi[
nnoremap goli :s/\(\S\)\s/\1\r/g=ip:w
nnoremap grb :vimgrep // --max-depth 3 ##<Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left>
nnoremap grf :vimgrep // --max-depth 3 **/*<Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left><Left>
nnoremap gE :s/\<./\u&/g
vnoremap ge :s/"\(\w\)/"\U\1/g:s/\. \s*\(\w\)/. \U\1/g
nnoremap ge :s/"\(\w\)/"\U\1/g:s/\. \s*\(\w\)/. \U\1/g
nnoremap gb q
nnoremap gq q
nnoremap gx :!qutebrowser 
nnoremap got :s/, / + /g
nnoremap god I"A":s/, /": "A,
nnoremap gop I":s/,/":A,
nnoremap goJs vi{:s/, /: "gv:norm A",
nnoremap gojs :s/, /: "A",
nnoremap goks :s/, / + " " + /g 
nnoremap gohk :s/\[/\[":s/]/"]:s/, /", "/g
nnoremap gokk :s/{/{":s/}/"}:s/, /", "/g
nnoremap golk :s/(/(":s/)/"):s/, /", "/g
nnoremap gos0 :s/'//g
nnoremap god0 :s/"//g
nnoremap gods :s/"/'/g
nnoremap gosd :s/'/"/g
nnoremap gs :se spell!
nnoremap gcp gcip
nnoremap n nzzzv
nnoremap q :x
nnoremap te :w:termfirefox home.html
nnoremap tr :e ~/repos/github.com/yuandandi/notes/translate
nnoremap to :e ~/.vim/init/singkatan/typos.vimrcg`"ciw
nnoremap tq q
nnoremap vo ggVG
nnoremap vL /{vi{
nnoremap vh /[vi[
nnoremap vl /(vi(
nnoremap vJ /'vi'
nnoremap vj /"vi"
nnoremap vk viw
vnoremap vk viw
vnoremap vK viW
nnoremap vp vip
xnoremap v 
nnoremap vv _v$d
nnoremap yP yap}p
nnoremap yp yap}
nnoremap yL yi{
nnoremap yl yi(
nnoremap yK yiW
nnoremap yk yiw
nnoremap yJ /'yi'
nnoremap yj /"yi"
nnoremap zh zH
nnoremap zl zL
vnoremap <C-X> :wgv
nnoremap <C-X> :w
vnoremap <C-A> :wgv
nnoremap <C-A> :w
xnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>TitlecaseLine :set opfunc=titlecase#titlecase|exe 'normal! ' . v:count1 . 'g@_'
xnoremap <silent> <Plug>Titlecase : call titlecase#titlecase(visualmode(),visualmode() ==# 'V' ? 1 : 0)
nnoremap <silent> <Plug>Titlecase :set opfunc=titlecase#titlecaseg@
tnoremap <silent> <Plug>(fzf-normal) 
tnoremap <silent> <Plug>(fzf-insert) i
nnoremap <silent> <Plug>(fzf-normal) <Nop>
nnoremap <silent> <Plug>(fzf-insert) i
nmap <silent> <Plug>CommentaryUndo :echoerr "Change your <Plug>CommentaryUndo map to <Plug>Commentary<Plug>Commentary"
nmap <F15> <Plug>VimwikiAddHeaderLevel
nmap <F14> <Plug>VimwikiPrevLink
nmap <F13> <Plug>VimwikiNextLink
nnoremap <F3> :wa|exe "mksession! " .. v:this_session:so ~/sessions/
nnoremap <F2> :vimgrep // --max-depth 3 **/*:cfdo s///g<Left><Left>
nnoremap <silent> <F6> :set filetype=javascript.jsx
nnoremap <silent> <F7> :set filetype=html
nnoremap <silent> <F8> :w !xclip -selection clipboard
vnoremap <silent> <F8> :w !xclip -selection clipboard
nnoremap <Down> zg
nnoremap <Up> yiw <Cmd>vs ~/.vim/init/singkatan/typos.vimrc}Oia pA pz=1yiw<Cmd>wq!viwp
nnoremap <Left> [s
nnoremap <Right> ]s
nnoremap <F5> <Cmd>se spell!
nnoremap <F4> "=strftime("%c")P
nnoremap <C-J> <Cmd>cprevzz
nnoremap <C-K> <Cmd>cnextzz
nnoremap <C-L> yyp
nnoremap <F12> :!systemctl suspend
nnoremap <C-D> zz
inoremap  bz=1A
inoremap p yiwA = p_yiwopA.
inoremap  yypkA
inoremap zfl // {{{}}}<Up>ccO;i
inoremap zx  !== 
inoremap z[ ${}<Left>
inoremap zT  - 
inoremap zt  + 
inoremap zV  < 
inoremap zv  > 
inoremap z=  += 
inoremap z-  -= 
inoremap zP ()O
inoremap zp {}O
inoremap zN  && 
inoremap zn  & 
inoremap zM  <= 
inoremap zr  => 
inoremap zm  >= 
inoremap zL {  }<Left><Left>
inoremap z0 ()
inoremap z. ("")<Left><Left>
inoremap zl ()<Left>
inoremap z; ""<Left>
inoremap z' ''<Left>
inoremap zK  != 
inoremap zk  := 
inoremap zJ  === 
inoremap zj  = 
inoremap zh []<Left>
inoremap zH []O
inoremap zb ``<Left>
iabbr wenak 😋
iabbr ttpmlt 🤐
iabbr spda 🚲
iabbr snmi 🌊
iabbr smgka 🍉
iabbr rckt 🚀
iabbr psyuk 🎮
iabbr plgi 🌈
iabbr pitza 🍪
iabbr osenmer 😊
iabbr osen 😃
iabbr operi 😇
iabbr ongak 🤣
iabbr onang 😢
iabbr omuach 😘
iabbr omik 🤔
iabbr omat 🙄
iabbr omalop 😍
iabbr omal 😳
iabbr olid 😜
iabbr okac 😎
iabbr odoa 🙏
iabbr ocap 😌
iabbr notbl 🎶
iabbr mwr 🌸
iabbr mic 🎤
iabbr mbil 🚗
iabbr loli 🍭
iabbr kuwe 🎂
iabbr kdo 🎁
iabbr jmur 🍦
iabbr huek 🤢
iabbr hore 🎊
iabbr cokl 🍫
iabbr brgr 🍔
iabbr bmi 🌍
iabbr blon 🎈
iabbr bku 📚
iabbr bga 🍀
iabbr angtang 🙌
iabbr goolge google
iabbr speciffically specifically
iabbr Gateaway Gateway
iabbr performancd performance
iabbr rmove remove
iabbr genrate generate
iabbr thte the
iabbr funtion function
iabbr fieeld field
iabbr eihter either
iabbr successs success
iabbr asnchronous asynchronous
iabbr pasisng passing
iabbr somethiing something
iabbr anythihng anything
iabbr rendereing rendering
iabbr previx prefix
iabbr thit this
iabbr dynaic dynamic
iabbr cliked clicked
iabbr referint refering
iabbr becase because
iabbr noeds needs
iabbr anoter another
iabbr elemnet element
iabbr properites properties
iabbr cfreate create
iabbr operaotr operator
iabbr likeyly likely
iabbr eithre either
iabbr narronwing narrowing
iabbr challagen challenge
iabbr uitlity utility
iabbr allowd allows
iabbr Saussage Sausage
iabbr chAnge change
iabbr vairabel variable
iabbr anohter another
iabbr orderes ordered
iabbr parnent parent
iabbr interfaace interface
iabbr memerkosi memerkosa
iabbr signaturre signature
iabbr inddex index
iabbr signatrue signature
iabbr doenst doesn't
iabbr litteral literal
iabbr objecte object
iabbr fixe fix
iabbr eelemnet element
iabbr implicily implicitly
iabbr dynamicaly dynamically
iabbr instanctiation instantiating
iabbr protectedn protected
iabbr accesible accessible
iabbr lowset lowest
iabbr occupide occupied
iabbr celsl celsl
iabbr acssible ansible
iabbr becaseuse because
iabbr konw know
iabbr visiblity visibility
iabbr initilaizer initializer
iabbr peroperti property
iabbr memners members
iabbr Solugion Solution
iabbr neer never
iabbr happende happened
iabbr vaule value
iabbr statemne statement
iabbr paramters parameters
iabbr interfacce interface
iabbr stirng sting
iabbr tss TypeScript
iabbr declaratiaon declaration
iabbr havent haven't
iabbr tupples tuples
iabbr oposite opposite
iabbr directorys directory
iabbr complet complete
iabbr mdouel module
iabbr odesnt doesn't
iabbr exisst exist
iabbr moduel module
iabbr prodocution production
iabbr versionin version in
iabbr versin version
iabbr ndoemon nodemon
iabbr commonjs commonJS
iabbr sytnax syntax
iabbr refference reference
iabbr apckage package
iabbr spotify Spotify
iabbr nodejs NodeJS
iabbr prequisite perquisite
iabbr dynameic dynamic
iabbr whtie white
iabbr scirpt script
iabbr waithing withing
iabbr thsi this
iabbr comesback comeback
iabbr peresissting persisting
iabbr remfove remove
iabbr outtermoset outermost
iabbr priorithies priorities
iabbr itnerface interface
iabbr checkd checked
iabbr textnode textNode
iabbr realtime mealtime
iabbr tpye type
iabbr appedns appends
iabbr keycod keycode
iabbr zola Zola
iabbr behaviour behavior
iabbr decrese decrees
iabbr bootom bottom
iabbr apear appear
iabbr clickde clicked
iabbr arroudn around
iabbr loooping looping
iabbr ofter after
iabbr fullly fully
iabbr remoev remove
iabbr listerener listener
iabbr exace exact
iabbr clinet client
iabbr audion audio
iabbr caracter character
iabbr thingking thinking
iabbr performatn performant
iabbr appendchild appendChild
iabbr thhe the
iabbr hsowed showed
iabbr hwite white
iabbr emlements elements
iabbr firste first
iabbr igtem item
iabbr elemengs elements
iabbr elemntgs element's
iabbr openssl OpenSSL
iabbr appleication application
iabbr childe child
iabbr thiws this
iabbr indnx index
iabbr oranges Oranges
iabbr applised apprised
iabbr nodelist NodeList
iabbr elemnents elements
iabbr itneractive interactive
iabbr zip ZIP
iabbr zealand Zealand
iabbr yu you
iabbr youve You've
iabbr youu you
iabbr Youur Your
iabbr youtube YouTube
iabbr yousing using
iabbr yourube YouTube
iabbr yours your's
iabbr youre You're
iabbr youll you'll
iabbr yoru your
iabbr yoou you
iabbr yhou you
iabbr yello yellow
iabbr yellobw yellow
iabbr yeellow yellow
iabbr yare year
iabbr yagn yang
iabbr xslt XSLT
iabbr xinjiang Xinjinag
iabbr xcreen screen
iabbr wy why
iabbr wysiwyg what you see is what you get
iabbr wya way
iabbr wsl WSL
iabbr wsl2 WSL2
iabbr writting writing
iabbr writiing writing
iabbr wouldnt wouldn't
iabbr woulc would
iabbr woudl would
iabbr wor word
iabbr wordl world
iabbr wont won't
iabbr wonderyng wondering
iabbr wonce once
iabbr wolrd world
iabbr wokr work
iabbr wokrk work
iabbr wofk work
iabbr woerk work
iabbr wneh when
iabbr wiwth with
iabbr wiwtah with
iabbr wi whatis
iabbr witl will
iabbr withoiut without
iabbr witho9ut without
iabbr withing within
iabbr withe with
iabbr wirk work
iabbr wiritten written
iabbr windos windows
iabbr wil will
iabbr willl will
iabbr wiht with
iabbr wigthin within
iabbr widonws windows
iabbr widnows windows
iabbr widht width
iabbr wich which
iabbr wht what
iabbr whtn when
iabbr whteher whether
iabbr whsy why
iabbr whre where
iabbr whree where
iabbr whos who's
iabbr whoch which
iabbr whn when
iabbr whne when
iabbr whitout whiteout
iabbr whith with
iabbr whild while
iabbr whidh which
iabbr whetehr whether
iabbr wher where
iabbr wheres where's
iabbr when When
iabbr whenn when
iabbr whenevder whenever
iabbr wheneever whenever
iabbr whdy why
iabbr whch which
iabbr whay why
iabbr wha what
iabbr what What
iabbr whats what's
iabbr whateer whatever
iabbr whar what
iabbr wetn went
iabbr wether whteher
iabbr wetern western
iabbr weteher weeder
iabbr were we're
iabbr wepage webpage
iabbr wel well
iabbr wehic which
iabbr weeki week
iabbr weay way
iabbr wcho echo
iabbr watterfall waterfall
iabbr watre water
iabbr watn want
iabbr watning wanting
iabbr watchin watching
iabbr watchign watching
iabbr wat3er water
iabbr wasnt wasn't
iabbr wasiting wasting
iabbr warnign warning
iabbr waht What
iabbr waas was
iabbr vuitlin builtin
iabbr vscode VSCode
iabbr voacab vocab
iabbr vlexible flexible
iabbr vlau value
iabbr vlaus values
iabbr vlaue value
iabbr vlaues values
iabbr vlaid valid
iabbr vitual virtula
iabbr visisted visited
iabbr vish fish
iabbr virtula virtual
iabbr virtulan virtual
iabbr virtua virtual
iabbr vinal final
iabbr vim Vim
iabbr viles files
iabbr viedl field
iabbr vidoe video
iabbr vides videos
iabbr videous video's
iabbr viddeo video
iabbr viatal vital
iabbr vfertical vertical
iabbr version version
iabbr versino version
iabbr versiaon version
iabbr verison version
iabbr verifid verified
iabbr veiw view
iabbr veing being
iabbr vefrsion version
iabbr vavlue value
iabbr varuable variable
iabbr varius various
iabbr varibale variable
iabbr varibales variables
iabbr varibalble variable
iabbr variaous various
iabbr varianle variable
iabbr varialbe variable
iabbr variabel variable
iabbr varaible variable
iabbr varaibles variables
iabbr varaiable variable
iabbr vanill vanilla
iabbr vanila vanilla
iabbr valu vale
iabbr valus values
iabbr valueable valuable
iabbr valsy falsy
iabbr valiues values
iabbr valirabel variable
iabbr vairbale variable
iabbr vairable variable
iabbr vaibrale variable
iabbr utitlity utility
iabbr utitility utility
iabbr utilitye utility
iabbr utilitky utility
iabbr utf UTF
iabbr utc UTC
iabbr ususally usually
iabbr usualy usually
iabbr ussuallly usually
iabbr usses uses
iabbr usptream upstream
iabbr usng using
iabbr usite suite
iabbr usin using
iabbr using Using
iabbr usign using
iabbr userd used
iabbr usenames usernames
iabbr useing using
iabbr usefull useful
iabbr usefoul useful
iabbr usb USB
iabbr usa USA
iabbr ursers users
iabbr url URL
iabbr urls URLs
iabbr upt up
iabbr uphil uphill
iabbr upercase uppercase
iabbr updateing updating
iabbr unwnted unwanted
iabbr unversally universally
iabbr unveilled unveiled
iabbr untul until
iabbr untill until
iabbr untik untuk
iabbr unsuccesfully unsuccessfully
iabbr unndouubtedly undoubtedly
iabbr unladden unladen
iabbr unix Unix
iabbr univesa unviersal
iabbr unitued united
iabbr united United
iabbr uniquie unique
iabbr unicode Unicode
iabbr unecessary unnecessary
iabbr undet under
iabbr Understatnd Understand
iabbr undershore underscore
iabbr underpinings underpinnings
iabbr underlien underline
iabbr underlaying underlying
iabbr underkline underline
iabbr undefien undefined
iabbr Uncerstatnd Understand
iabbr uncacceptable unacceptable
iabbr umverella umbrella
iabbr uisngg using
iabbr udp UDP
iabbr udpate update
iabbr udnoubtedly undoubtedly
iabbr udner under
iabbr ubutnu Ubuntu
iabbr ubuntu Ubuntu
iabbr ubttons buttons
iabbr tyupes types
iabbr typicalyy typically
iabbr typescript TypeScript
iabbr typefiel type file
iabbr eg e.g.
iabbr ter TypeError
iabbr typeerror TypeError
iabbr tyep type
iabbr tyepes types
iabbr tu too
iabbr tursn turn
iabbr ture true
iabbr tumeric turmeric
iabbr tui TUI
iabbr tty TTY
iabbr tstarting starting
iabbr tsk task
iabbr tshirt T-Shirt
iabbr trythy truthy
iabbr trutyhy truthy
iabbr treu true
iabbr treminal terminal
iabbr trea Tera
iabbr traversla traversal
iabbr travelt travel
iabbr trasdidiotnal traditional
iabbr transtitions transitions
iabbr transitino transition
iabbr transformatino transformation
iabbr trafic traffic
iabbr traditioally traditionally
iabbr tradision tradition
iabbr tracet traced
iabbr tpyyes types
iabbr tpee type
iabbr tow two
iabbr toppoings toppings
iabbr tonw town
iabbr tommorow tomorrow
iabbr tomato 🍅
iabbr togle toggle
iabbr togetheh together
iabbr todo TODO
iabbr todah today
iabbr tmplate template
iabbr tls TLS
iabbr tlah telah
iabbr tithub GitHub
iabbr tithle title
iabbr timwe time
iabbr timerstatues timerstatus
iabbr timere timer
iabbr tiktok TikTok
iabbr tierminal terminal
iabbr tiem time
iabbr thwo two
iabbr tht that
iabbr th the
iabbr throut through
iabbr throuth through
iabbr throurh through
iabbr throuhg through
iabbr throug through
iabbr throught thought
iabbr thpe type
iabbr thout thought
iabbr thoug though
iabbr thoruth through
iabbr thorugh through
iabbr thi the
iabbr Thisng Things
iabbr thinnk think
iabbr thingk think
iabbr thime time
iabbr thign thing
iabbr thigns things
iabbr thight tight
iabbr thie the
iabbr thies this
iabbr thier their
iabbr thiems times
iabbr thieeory theory
iabbr thidr third
iabbr thhrough through
iabbr theyve they've
iabbr they They
iabbr theyre they're
iabbr thext text
iabbr tHe the
iabbr thes this
iabbr thesse these
iabbr thery there
iabbr ther their
iabbr therme there
iabbr theri their
iabbr theres there's
iabbr theree there
iabbr theoir their
iabbr theis this
iabbr thefaces the faces
iabbr theer there
iabbr theem them
iabbr theat that
iabbr thean than
iabbr thats that's
iabbr thatn than
iabbr thath that
iabbr tha that
iabbr tghe the
iabbr tesla Tesla
iabbr termnal terminal
iabbr terml terms
iabbr terminla terminal
iabbr termingal terminal
iabbr terminall terminal
iabbr termianl terminal
iabbr termianal terminal
iabbr teranary ternary
iabbr temporayr temporary
iabbr templeate template
iabbr teminal terminal
iabbr televisio television
iabbr teh the
iabbr tehe the
iabbr tediouis tedious
iabbr teahidng teaching
iabbr tcp TCP
iabbr tbale table
iabbr taype type
iabbr tath that
iabbr targetting targeting
iabbr talbe table
iabbr taks task
iabbr takign taking
iabbr taiwan Taiwan
iabbr taht that
iabbr sytyle style
iabbr sysstem system
iabbr syntaxerror SyntaxError
iabbr syntak syntax
iabbr syncchronous synchronous
iabbr symobl symbol
iabbr symbos symbol
iabbr symbolci symbols
iabbr sybsystem subsystem
iabbr sybmolic symbolic
iabbr swt SWT
iabbr switzerland Switzerland
iabbr swiss Swiss
iabbr swhitch switch
iabbr sustioner sustainer
iabbr suse use
iabbr surrouinding surrounding
iabbr surprigisng surprising
iabbr suroundign surrounding
iabbr surender surrender
iabbr suppresed suppressed
iabbr suppoerted supported
iabbr superflosu superfluous
iabbr sunday Sunday
iabbr sukarno Sukarno
iabbr sugestions suggestions
iabbr sufix suffix
iabbr sufficinet sufficient
iabbr suer user
iabbr suc such
iabbr sucdh such
iabbr succes success
iabbr successed successes
iabbr succesor successor
iabbr succesfuly successfully
iabbr succesful successful
iabbr succesfully successfully
iabbr subystem subsystem
iabbr subtitution substitution
iabbr subtitutions substitutions
iabbr subbmitted submitted
iabbr suati suatu
iabbr styleing styling
iabbr styel style
iabbr styelsheet stylesheet
iabbr styeles styles
iabbr sttus status
iabbr struff stuff
iabbr stroe store
iabbr strint string
iabbr stringgs strings
iabbr strign string
iabbr strenth strength
iabbr storeage storage
iabbr storate storage
iabbr stora store
iabbr storaage storage
iabbr stonesa stones
iabbr stoer store
iabbr stirngs strings
iabbr stirings strings
iabbr stil still
iabbr sthe the
iabbr steve Steve
iabbr stetmeent statement
iabbr steatlh stealth
iabbr statr start
iabbr statred started
iabbr statment statement
iabbr statmenet statement
iabbr statmeent statement
iabbr staticc static
iabbr staticaly statically
iabbr states States
iabbr statemen statement
iabbr statemengg statement
iabbr statemenet statement
iabbr stateement statement
iabbr startitng starting
iabbr starndard standard
iabbr stareted started
iabbr starbucks Starbucks
iabbr standadr standard
iabbr stagging staging
iabbr stablished established
iabbr staack stack
iabbr sstem system
iabbr ssg SSG
iabbr squaer square
iabbr splititng splitting
iabbr spirirual spiritual
iabbr speraeat spread
iabbr speen spin
iabbr spedning spending
iabbr spedified specified
iabbr specivied specified
iabbr specivic specific
iabbr specififcation specification
iabbr specifieid specified
iabbr specifiec specific
iabbr specifidc specific
iabbr specifes specifies
iabbr specifeis specifies
iabbr specifeid specified
iabbr specifed specified
iabbr specidfic specific
iabbr speciall special
iabbr speciallity specialty
iabbr speccified specified
iabbr spearker speaker
iabbr sovereingty sovereignty
iabbr SOURCEs SOURCES
iabbr sourcd source
iabbr sourcde sourced
iabbr souncdard soundcard
iabbr sould should
iabbr soudns sounds
iabbr soources sources
iabbr somthing something
iabbr somtehing something
iabbr sometines sometimes
iabbr somethin something
iabbr somethimes sometimes
iabbr Somethig Something
iabbr somethign something
iabbr somehting something
iabbr sohuth south
iabbr softwrae software
iabbr softweare software
iabbr softerwere software
iabbr softare software
iabbr soem some
iabbr soekarno Sukarno
iabbr socicla social
iabbr socets sockets
iabbr sngle single
iabbr smoot smooth
iabbr smoooth smooth
iabbr smalleer smaller
iabbr slugggish sluggish
iabbr slightliy slightly
iabbr slectors selectors
iabbr skilstak skilstak
iabbr sixze size
iabbr siubmitted submitted
iabbr sinlge single
iabbr singel single
iabbr sindow window
iabbr sinc since
iabbr sinagaproe Singapore
iabbr simultaenously simultaneously
iabbr simpel simple
iabbr simillar similar
iabbr similay similar
iabbr siletn silent
iabbr sii see
iabbr si is
iabbr signinficantly significantly
iabbr signinficance significance
iabbr significat significant
iabbr siet site
iabbr sice since
iabbr shuch such
iabbr shpo shop
iabbr showr show
iabbr showereing showering
iabbr showd showed
iabbr shouled should
iabbr shouldnt shouldn't
iabbr shoulc should
iabbr shouild should
iabbr shoudl should
iabbr shorthadn shorthand
iabbr shor show
iabbr shorhand shorthand
iabbr shoppngl shopping
iabbr shoppign shopping
iabbr shoew show
iabbr shes she's
iabbr she She
iabbr sha SHA
iabbr shart start
iabbr shareing sharing
iabbr sfelist safelist
iabbr setptember september
iabbr sesua sesuai
iabbr serviece service
iabbr serndir sendiri
iabbr sequentlly sequentially
iabbr sequentiallly sequentially
iabbr sequenncd sequenced
iabbr sequaentially sequentially
iabbr september September
iabbr sepecifiecally specifically
iabbr sepecies species
iabbr separatro separator
iabbr sepace space
iabbr seo SEO
iabbr sentury century
iabbr sensitibe sensitive
iabbr sensiteive sensitive
iabbr sencitive sensitive
iabbr semanics semantics
iabbr seleected selected
iabbr sehll shell
iabbr seeseorang seseorang
iabbr seeral several
iabbr seee see
iabbr seeek seek
iabbr secur recur
iabbr secureity security
iabbr secrue secure
iabbr secondk seconds
iabbr secodns seconds
iabbr seccure secure
iabbr sebagh sabah
iabbr searhc search
iabbr searhch search
iabbr searchsploti searchsploit
iabbr scutlures cultures
iabbr scultpture sculptures
iabbr scrpt script
iabbr scrol scroll
iabbr scritp script
iabbr scrigpt script
iabbr scren screen
iabbr screeen screen
iabbr screan screen
iabbr scopb scope
iabbr scipt sci pt
iabbr scatered scattered
iabbr sbeds beds
iabbr savely safely
iabbr saveddd saved
iabbr saty say
iabbr sarawak Sarawak
iabbr sape shape
iabbr sapace space
iabbr salvia saliva
iabbr saha saja
iabbr rwo row
iabbr ruude rude
iabbr runique unique
iabbr runing running
iabbr rss RSS
iabbr rpint print
iabbr ro or
iabbr rooot root
iabbr roder order
iabbr roatate rotate
iabbr rmy my
iabbr rmeove remove
iabbr rmany many
iabbr rithtful rightful
iabbr ritghts rights
iabbr righr right
iabbr revresh refresh
iabbr rever refer
iabbr reveald revealed
iabbr reuturn return
iabbr reutrn return
iabbr reutnr return
iabbr reutn return
iabbr reuslt result
iabbr reusalbe reusable
iabbr returh return
iabbr retunrs returns
iabbr retturn return
iabbr rets rest
iabbr retrun return
iabbr retirun return
iabbr retirn return
iabbr resutl result
iabbr resulf result
iabbr restroe restore
iabbr restorinign restoring
iabbr responss response
iabbr resons reasons
iabbr resemblence resemblance
iabbr resasons reasons
iabbr requriemetns requirements
iabbr requried required
iabbr reprexsenting representing
iabbr represetns represents
iabbr representaiton representation
iabbr repositroy repository
iabbr repl real
iabbr repetititve repetitive
iabbr reovme remove
iabbr renmae rename
iabbr renedrs renders
iabbr renedering rendering
iabbr rendre render
iabbr rendred rendered
iabbr renderign rendering
iabbr renadh rendah
iabbr renadah rendah
iabbr remvoe remove
iabbr remvoed removed
iabbr remve remove
iabbr removeing removing
iabbr remofe remove
iabbr reltaed related
iabbr religirons religions
iabbr religiouse religious
iabbr relfect reflect
iabbr relevatn relevant
iabbr relatibve relative
iabbr reidirect redirect
iabbr reguar regular
iabbr referrs refers
iabbr referes refers
iabbr referenct reference
iabbr reeset reset
iabbr reeally really
iabbr redundent redundant
iabbr redundatn redundant
iabbr redner render
iabbr redirectign redirecting
iabbr redhat Redhat
iabbr redb red
iabbr recurseive recursive
iabbr recurevel recuresively
iabbr recuresvely recursively
iabbr recuresively recursively
iabbr recongnize recognize
iabbr recomended recommended
iabbr recomendation recommendation
iabbr receifing receiving
iabbr reature feature
iabbr reassing reassign
iabbr reassingned reassigned
iabbr reassingde reassigned
iabbr reasd read
iabbr realy really
iabbr readlink read link
iabbr rdf RDF
iabbr rathre rather
iabbr raspberry Raspberry
iabbr rarray array
iabbr rangkng rangking
iabbr randr RandR
iabbr randon random
iabbr randonm random
iabbr randomd random
iabbr radnom random
iabbr radion radio
iabbr quran Qur'an
iabbr quiotes quotes
iabbr quiestion question
iabbr questin questing
iabbr questeion question
iabbr quesstion question
iabbr qr QR
iabbr purpos purpose
iabbr purpel purple
iabbr puropose purpose
iabbr purgint purging
iabbr publik public
iabbr ptorayed portrayed
iabbr ptogram program
iabbr psot post
iabbr psesific specific
iabbr pseed speed
iabbr pruposes purposes
iabbr prtray portray
iabbr proviate private
iabbr prots ports
iabbr prot port
iabbr protperty property
iabbr prototyep prototype
iabbr prosp props
iabbr prormat format
iabbr propterties properties
iabbr proprietayr proprietary
iabbr propionents proponents
iabbr propietary proprietary
iabbr prophtets prophets
iabbr propetises properties
iabbr propeties properties
iabbr propery properly
iabbr propertties properties
iabbr propertise properties
iabbr properti property
iabbr propertie properties
iabbr propertieis properties
iabbr propertieas properties
iabbr properteis properties
iabbr promtp prompt
iabbr promram program
iabbr prominetn prominent
iabbr programing programming
iabbr progaming programming
iabbr profirt profit
iabbr PROFIEL PROFILE
iabbr profide provide
iabbr proctechted protected
iabbr procject project
iabbr proceudure procedure
iabbr procedurla procedural
iabbr procedre procedure
iabbr proceded proceeded
iabbr priveous previous
iabbr privacey privacy
iabbr pritn print
iabbr prin preen
iabbr pring print
iabbr primititve primitive
iabbr primitieve primitive
iabbr prifat private
iabbr priciples principles
iabbr pribvate private
iabbr prhase phrase
iabbr prevneting preventing
iabbr previwous previous
iabbr previleged privileged
iabbr previewous previous
iabbr previeous previous
iabbr previdous previous
iabbr prevfer prefer
iabbr prever prefer
iabbr preverable preferable
iabbr prevenet prevent
iabbr preveer prefer
iabbr prespective prospective
iabbr presonal personal
iabbr presing pressing
iabbr presetn present
iabbr presentaiton presentation
iabbr prepetrator perpetrator
iabbr preoceedure procedure
iabbr preocedures procedures
iabbr premissions permissions
iabbr premisions permissions
iabbr preivieous previous
iabbr preious previous
iabbr preinted printed
iabbr prefreneces preferences
iabbr prefious previous
iabbr preferrred preferred
iabbr prefereed preferred
iabbr prefent prevent
iabbr precisson precision
iabbr preciding preceding
iabbr pracitices practices
iabbr powerfull powerful
iabbr powere powers
iabbr potrayed portrayed
iabbr postsripts postscripts
iabbr post Post
iabbr possitive positive
iabbr possinle possible
iabbr possibel possible
iabbr posix POSIX
iabbr positoin position
iabbr porperties properties
iabbr porne prone
iabbr porgrams programs
iabbr porgramming programming
iabbr porcesses processes
iabbr populationof population of
iabbr poman podman
iabbr poixels pixels
iabbr poin point
iabbr poeple people
iabbr ploting plotting
iabbr plititcal political
iabbr pleas please
iabbr playabel playable
iabbr platfrom platform
iabbr plaftrom platform
iabbr pitfals pitfalls
iabbr pirnt print
iabbr pipewire PipeWire
iabbr piosts posts
iabbr pid PID
iabbr pickeld pickled
iabbr physicall physical
iabbr phouysical physical
iabbr phaases phases
iabbr perviw preview
iabbr pervect perfect
iabbr perserving preserving
iabbr perserivn preserving
iabbr perosn person
iabbr perons person
iabbr perobagation propagation
iabbr pernickety persnickety
iabbr permorming performing
iabbr permisson permission
iabbr permisisons permissions
iabbr perl Perl
iabbr perku perlu
iabbr peritn print
iabbr performatnce performance
iabbr performang performing
iabbr perforamance performance
iabbr peower power
iabbr penuat penguat
iabbr peninsuallar peninsular
iabbr pembershian pembersihan
iabbr p_elemnet p_element
iabbr peacefullly peacefully
iabbr pdf PDF
iabbr pci PCI
iabbr pcakage package
iabbr pbuh PBUH
iabbr passsed passed
iabbr passowrd password
iabbr passin passing
iabbr pasing passing
iabbr particualr particular
iabbr parrent parent
iabbr parisn parsing
iabbr parisng parsing
iabbr pari pair
iabbr paretn parent
iabbr parenet parent
iabbr paramter parameter
iabbr parametesr parameters
iabbr parametes parameters
iabbr parametere parameters
iabbr paramaeter parameter
iabbr paraisin parsing
iabbr paragrpah paragraph
iabbr paragrahp paragraph
iabbr paragpah paragraph
iabbr papaer paper
iabbr paneds panes
iabbr pancakge pancake
iabbr pakistan Pakistan
iabbr pakcages packages
iabbr paht path
iabbr pahases phases
iabbr paernt parent
iabbr padnoc pandoc
iabbr pacnkage package
iabbr packges packages
iabbr packge package
iabbr packgae package
iabbr pacckage package
iabbr ownd own
iabbr ovverride override
iabbr ov of
iabbr overrrid override
iabbr overlaping overlapping
iabbr overlaped overlapped
iabbr overide override
iabbr outsid outside
iabbr outpus output
iabbr outher other
iabbr ouptut output
iabbr otu out
iabbr ot to
iabbr otpions options
iabbr otomatisa otomatis
iabbr otherr other
iabbr othe other
iabbr otgher other
iabbr oter otter
iabbr otehr other
iabbr os OS
iabbr osi OSI
iabbr orriginal original
iabbr orignial original
iabbr origis origin
iabbr ordure order
iabbr ordereed ordered
iabbr orbject object
iabbr oraganization organization
iabbr optoon option
iabbr optoins options
iabbr optiosn option
iabbr optionla optional
iabbr optioin option
iabbr optino option
iabbr optinal optional
iabbr opreateor operator
iabbr opperator operator
iabbr opertor operator
iabbr opertoer operator
iabbr opertaor operator
iabbr oper open
iabbr opernsource ope resource
iabbr Opern Open
iabbr operatoar operator
iabbr operatin operation
iabbr operaor operator
iabbr openssh OpenSSH
iabbr opengl OpenGL
iabbr openeing opening
iabbr opeenre opener
iabbr oone one
iabbr oom OOM
iabbr onwe one
iabbr ont on
iabbr ontly only
iabbr onlyu only
iabbr onlhy only
iabbr onet one
iabbr omittted omitted
iabbr omited omitted
iabbr omg OMG
iabbr ok OK
iabbr okey okay
iabbr ojbect object
iabbr oit It
iabbr ois is
iabbr oiptons options
iabbr ohw how
iabbr ohowever however
iabbr ogten often
iabbr ogher other
iabbr ofther other
iabbr ofthen often
iabbr ofrmatting formatting
iabbr ofrmat format
iabbr ofr for
iabbr ofirgins origins
iabbr ofer over
iabbr oetstat netstat
iabbr oera era
iabbr oeprator operator
iabbr oepn open
iabbr oen one
iabbr od do
iabbr ocur occur
iabbr ocunt count
iabbr ocpy copy
iabbr ocntiue continue
iabbr ocmmand command
iabbr ocme come
iabbr occurences occurrences
iabbr occurence occurrence
iabbr occureances occurrences
iabbr occuraces occur aces
iabbr occuiped occupied
iabbr ocassionaly occasionally
iabbr obvsessed obsessed
iabbr obption option
iabbr obnly only
iabbr objedct object
iabbr object Object
iabbr objecs object
iabbr objec object
iabbr obbsessed obsessed
iabbr nwme name
iabbr numver number
iabbr numverical numerical
iabbr numer number
iabbr numericc numeric
iabbr numbver number
iabbr numbmer number
iabbr numbe number
iabbr nuerous numerous
iabbr nuemerical numerical
iabbr nubmers numbers
iabbr nubmer number
iabbr nto not
iabbr ntetwork network
iabbr november November
iabbr nott not
iabbr notivication notification
iabbr notificatoin notification
iabbr noth north
iabbr nothig nothing
iabbr nothign nothing
iabbr notgherlands Netherlands
iabbr notationand notation and
iabbr notatino notation
iabbr notaiton notation
iabbr nost most
iabbr norway Norway
iabbr nolder older
iabbr nokias Nokia's
iabbr nokia Nokia
iabbr nokiaas Nokia's
iabbr noew new
iabbr nodieis bodies
iabbr noah Noah
iabbr nmpa nmap
iabbr night Night
iabbr newwer newer
iabbr newlinen newline
iabbr nevariously nefariously
iabbr networkign networking
iabbr netwokr network
iabbr netive native
iabbr nethernlands Netherlands
iabbr netherlands Netherlands
iabbr netflix Netflix
iabbr netework network
iabbr neter enter
iabbr netehrelands Netherlands
iabbr nestsed nestled
iabbr neovim NeoVim
iabbr negitiaate negotiate
iabbr negatoive negative
iabbr negar negara
iabbr neeed need
iabbr ned need
iabbr nections sections
iabbr necessayr necessary
iabbr necesary necessary
iabbr nebara negara
iabbr ndoe node
iabbr navigat navigate
iabbr naviagation navigation
iabbr navbigate navigate
iabbr natrual natural
iabbr nat NAT
iabbr nan NaN
iabbr nam name
iabbr namesa names
iabbr namems name's
iabbr nameing naming
iabbr namd named
iabbr naimation animation
iabbr nad and
iabbr na an
iabbr myaning meaning
iabbr mvoe move
iabbr mve move
iabbr mux tmux
iabbr muslims Muslims
iabbr muslim Muslim
iabbr musilim Muslim
iabbr muschles muscles
iabbr muroid muroid
iabbr multipel multiple
iabbr multinationa multinational
iabbr multidimensionall multidimensional
iabbr muhamma Muhammad
iabbr muhammads Muhammad's
iabbr muhamad Muhammad
iabbr mtatter matter
iabbr mroe more
iabbr mozilla Mozilla
iabbr movile mobile
iabbr moveing moving
iabbr movbile mobile
iabbr motorcyle motorcycle
iabbr mosue mouse
iabbr moset most
iabbr moses Moses
iabbr mornign morning
iabbr mor more
iabbr morining morning
iabbr moringng morning
iabbr mony money
iabbr monitr monitor
iabbr moniotor monitor
iabbr mongodb MongoDB
iabbr moistoure moisture
iabbr moinitor monitor
iabbr moere more
iabbr moed mode
iabbr modivy modify
iabbr moderyn modern
iabbr modeal modal
iabbr mnenu menu
iabbr misstype mistype
iabbr missgin missing
iabbr minght might
iabbr millisecons milliseconds
iabbr milisecons millisecond
iabbr miliseconsds milliseconds
iabbr miliseconds milliseconds
iabbr milions millions
iabbr milek milk
iabbr midle middle
iabbr midified modified
iabbr microsoft Microsoft
iabbr mgh https://github.com/Yuandandi
iabbr mexican Mexican
iabbr metod method
iabbr metirics metrics
iabbr methosd methods
iabbr methodb methods
iabbr messanger messenger
iabbr mescellaneous miscellaneous
iabbr mepty empty
iabbr mentri menteri
iabbr menssages messages
iabbr mengaktakan mengatakan
iabbr mengakiibatkan mengakibatkan
iabbr mengadapi menghadapi
iabbr menaing meaning
iabbr menaingful meaningful
iabbr memilikii memiliki
iabbr memgbers members
iabbr memeorh memory
iabbr memeorabel memorable
iabbr memeofry memory
iabbr meke make
iabbr meiji Meiji
iabbr mehtod method
iabbr meggings muggings
iabbr meemory memory
iabbr mee Dandi Yuan Aridianto
iabbr meata meta
iabbr meanign meaning
iabbr mdoal modal
iabbr mdns mDNS
iabbr md5 MD5
iabbr maximumm maximum
iabbr mattial martial
iabbr mathch match
iabbr materialzied materialized
iabbr matchies matches
iabbr masyarakay masyarakat
iabbr marsk marks
iabbr marksers markers
iabbr markdwon markdown
iabbr markdown Markdown
iabbr markdonw Markdown
iabbr march March
iabbr manuiualy manually
iabbr manke make
iabbr manipultation manipulation
iabbr manipulatyed manipulated
iabbr manger manager
iabbr mangager manager
iabbr manchines machines
iabbr manageement management
iabbr manaeger manager
iabbr manaage manage
iabbr malaysuia Malaysia
iabbr malaysia Malaysia
iabbr malayisia Malaysia
iabbr malaya Malaya
iabbr malasyia Malaysia
iabbr malacca Malacca
iabbr maket make
iabbr majosr majors
iabbr maintaint maintains
iabbr maintaenance maintenance
iabbr mainpulation manipulation
iabbr magter matter
iabbr maek make
iabbr machien machine
iabbr machhine machine
iabbr maanager manager
iabbr maanaged managed
iabbr maachine machine
iabbr lwas law
iabbr lvies lives
iabbr lup for i in {1..}; do echo item $i.; done?}i
iabbr lua Lua
iabbr lts LTS
iabbr lsit list
iabbr lsitens listens
iabbr lsiteners listeners
iabbr lsat last
iabbr lowercas lowercase
iabbr lornum exec curl -sSL "http://metaphorpsum.com/paragraphs/"<Left>
iabbr Lorem Loren
iabbr loook look
iabbr loogkng looking
iabbr loocate locate
iabbr logn long
iabbr lognger longer
iabbr logica logic
iabbr logeical logical
iabbr locla local
iabbr locatae locate
iabbr loadeed loaded
iabbr loacal local
iabbr litteraly literally
iabbr littel little
iabbr litreasinya literasinnya
iabbr litlle little
iabbr literasin literasi
iabbr liteasi literasi
iabbr listneers listeners
iabbr listerners listeners
iabbr listerner listener
iabbr listenerf listeners
iabbr lisngint listing
iabbr lishcense license
iabbr liscences licenses
iabbr lirt3eral literal
iabbr linxu Linux
iabbr linux Linux
iabbr linst list
iabbr linsk links
iabbr linse lines
iabbr lin line
iabbr linkt link
iabbr linivng lining
iabbr ling link
iabbr lineked linked
iabbr linee line
iabbr lincoln Lincoln
iabbr likn link
iabbr lik link
iabbr lightwieght lightweight
iabbr liete lite
iabbr liek like
iabbr liead lead
iabbr libreoffice LibreOffice
iabbr leverl level
iabbr levell level
iabbr levarage leverage
iabbr lettter letter
iabbr letterh letters
iabbr letetr letter
iabbr leter letter
iabbr lern learn
iabbr lentth length
iabbr lenth length
iabbr lengthh length
iabbr lenght length
iabbr lengeth length
iabbr lements elements
iabbr lement element
iabbr lelments elements
iabbr lein line
iabbr lefet left
iabbr leemnets elements
iabbr leement element
iabbr lcoaly locally
iabbr launchhed launched
iabbr latesst latest
iabbr lates latest
iabbr las last
iabbr largaer larger
iabbr laregest largest
iabbr laod load
iabbr lan LAN
iabbr lanjupt lanjut
iabbr languange language
iabbr languae language
iabbr langeuage language
iabbr laik like
iabbr kusage usage
iabbr koordinage coordinate
iabbr kong Kong
iabbr knwon known
iabbr knowledgte knowledge
iabbr kisd kids
iabbr king King
iabbr kindl kindle
iabbr kerashya kerasnya
iabbr kebuuthan kebutuhan
iabbr kapitanya kapita nya
iabbr jungel jungle
iabbr july July
iabbr judaism Judaism
iabbr jsut just
iabbr json JSON
iabbr josn json
iabbr josb jobs
iabbr joingin joining
iabbr jkt Jakarta
iabbr jinja2 Jinja2
iabbr jesus Jesus
iabbr jekyll Jekyll
iabbr javascript JavaScript
iabbr javasciript JavaScript
iabbr japn japan
iabbr japan Japan
iabbr japanese Japanese
iabbr japanesee Japanese
iabbr japanaese Japanese
iabbr jaopanese Japanese
iabbr january January
iabbr jan Jan
iabbr jakarta Jakarta
iabbr iwth with
iabbr iwll will
iabbr iwdely widely
iabbr ivnoke invoke
iabbr its it's
iabbr itno into
iabbr itn in
iabbr itme time
iabbr itmes items
iabbr itmean it mean
iabbr itll it'll
iabbr it It
iabbr itesm items
iabbr iterm2 iTerm2
iabbr itereate iterate
iabbr itemm item
iabbr isze size
iabbr ist It's
iabbr istener listener
iabbr isnt isn't
iabbr isn in
iabbr isngel single
iabbr islam Islam
iabbr irc IRC
iabbr ipv6 IPv6
iabbr ipv4 IPv4
iabbr ipp IPP
iabbr ip IP
iabbr iphione iPhone
iabbr invormation information
iabbr involfe involve
iabbr invokd invoked
iabbr inventeory inventory
iabbr intu into
iabbr intsalation installation
iabbr introuduce introduce
iabbr introdueced introduced
iabbr introductiono introduction
iabbr intrduced introduced
iabbr intractive interactive
iabbr Intgers Integers
iabbr intet intent
iabbr intervace interface
iabbr intermpretation interpretation
iabbr intermpereter interpreter
iabbr intermitten intermittent
iabbr intergral integral
iabbr intergraition integration
iabbr interfal interval
iabbr interenet internet
iabbr interal internal
iabbr interactivfe interactive
iabbr interactivce interactive
iabbr interactie interactive
iabbr interacet interact
iabbr intepreter interpreter
iabbr insuficient insufficient
iabbr instlaled installed
iabbr institued instituted
iabbr instantiationg instantiating
iabbr instanes instances
iabbr installaiton installation
iabbr instalation installation
iabbr instagram Instagram
iabbr instaead instead
iabbr insonesia Indonesia
iabbr inslay inlay
iabbr insisde inside
iabbr insiede inside
iabbr inshell in shell
iabbr inser insert
iabbr inseatead instead
iabbr insatall install
iabbr insall install
iabbr inromation information
iabbr inovasinya inovasi nya
iabbr inot into
iabbr inoformation information
iabbr inoed inode
iabbr inodonesia Indonesia
iabbr inmutable immutable
iabbr injedctedd injected
iabbr inititate initiate
iabbr inidonesians Indonesians
iabbr inheritabel inheritable
iabbr ingridients ingredients
iabbr ingormation information
iabbr ingnore ignore
iabbr ingle single
iabbr ingformation information
iabbr ingetger integer
iabbr infuential influential
iabbr informatino information
iabbr informatinfor information for
iabbr infomation information
iabbr infiite infinite
iabbr infentory inventory
iabbr ineteesting interesting
iabbr indtation indentation
iabbr indonesias Indonesia
iabbr indonesians Indonesians
iabbr indonesian Indonesian
iabbr indonesia Indonesia
iabbr indo Indonesia
iabbr indoesias Indonesia's
iabbr indoensians Indonesians
iabbr indoensia Indonesia
iabbr indoenesian Indonesian
iabbr indoeneasia Indonesia
iabbr indifidual individual
iabbr indidcte indicate
iabbr indexign indexing
iabbr indesks indeks
iabbr inderictly indirectly
iabbr independendt independent
iabbr independece independence
iabbr independdecne independence
iabbr indentatino indentation
iabbr incrmenets increments
iabbr increaste increase
iabbr incoporation incorporation
iabbr inclueded included
iabbr includin including
iabbr includde include
iabbr incex index
iabbr incetpion inception
iabbr incerement increment
iabbr inboun inbound
iabbr inavetebly inevitably
iabbr inadvertnet inadvertent
iabbr imune immune
iabbr imte item
iabbr improev improve
iabbr imporve improve
iabbr importatn important
iabbr importan important
iabbr imporovements improvements
iabbr imporoved improved
iabbr impolies implies
iabbr impolementation implementation
iabbr impoerattive imperative
iabbr implict implicit
iabbr Implici Implicit
iabbr implemeentation implementation
iabbr impies implies
iabbr impertaive imperative
iabbr imortance importance
iabbr imolicit implicit
iabbr immutabel immutable
iabbr immmutable immutable
iabbr immideately immediately
iabbr immetdiatiielly immediately
iabbr immams imams
iabbr im I'm
iabbr imideately immediately
iabbr imge image
iabbr imediatley immediately
iabbr imamah Imamah
iabbr imags image
iabbr imaage image
iabbr iiterate iterate
iabbr iis is
iabbr iirc IIRC
iabbr iircc if I remember correctly
iabbr iinstall install
iabbr i I
iabbr ightness lightness
iabbr ifs if
iabbr iformation formation
iabbr ifnormation information
iabbr ifnormatin information
iabbr ifno info
iabbr ifles files
iabbr ifferent different
iabbr ie i.e.
iabbr idnonesia Indonesia
iabbr idnexing indexing
iabbr idnetical identical
iabbr idnent indent
iabbr idesa ideas
iabbr identitty identity
iabbr identihfy identify
iabbr icmp ICMP
iabbr iam I am
iabbr iamges images
iabbr iamge image
iabbr iamages images
iabbr iach each
iabbr hyprelink hyperlink
iabbr hygine hygiene
iabbr hwy why
iabbr Hwo How
iabbr hwo how
iabbr hwihc which
iabbr hwich which
iabbr hwere where
iabbr hwat what
iabbr hwatis whatis
iabbr hust just
iabbr hundresds hundreds
iabbr humblebarg humble bark
iabbr hugo Hugo
iabbr https https
iabbr html HTML
iabbr htmlelement HTMLEleement
iabbr htmlcollection HTMLCollection
iabbr htis this
iabbr hthe the
iabbr hte the
iabbr htem them
iabbr htat that
iabbr htan than
iabbr htahun tahun
iabbr hsow show
iabbr hsis this
iabbr hsared shared
iabbr hre here
iabbr hree here
iabbr how How
iabbr houman human
iabbr houese house
iabbr houdeholds households
iabbr hostr hosts
iabbr horuzontally horizontally
iabbr horizontaly horizontally
iabbr hoook hook
iabbr hong Hong
iabbr hoint hint
iabbr hoem home
iabbr hlep help
iabbr histroy history
iabbr histor history
iabbr hisotry history
iabbr hisotians historians
iabbr hirearchy hierarchy
iabbr hins hints
iabbr hinga hingga
iabbr hinduism Hinduism
iabbr hiliy hilir
iabbr hightlight highlight
iabbr highter higher
iabbr highier higher
iabbr hifher higher
iabbr hiere here
iabbr hierarcy hierarchy
iabbr hieararchy hierarchy
iabbr hiddenf hidden
iabbr hhow how
iabbr hhousehold household
iabbr hestag hastag
iabbr hes he's
iabbr herval herbal
iabbr heres here's
iabbr helpd help
iabbr helo Hello
iabbr hello Hello
iabbr he He
iabbr hedign heeding
iabbr headign heading
iabbr headeer header
iabbr hdup hidup
iabbr hdr ####################################################################
iabbr havae have
iabbr hatumu hatimu
iabbr hasnt hasn't
iabbr hased hashed
iabbr happesns happens
iabbr happends happens
iabbr happend happened
iabbr hans hand
iabbr handel Handel
iabbr hallowoin hallowing
iabbr hakers hackers
iabbr hading hating
iabbr haave have
iabbr haas has
iabbr gutys guys
iabbr gutorial tutorial
iabbr guis GUIs
iabbr gui GUI
iabbr gsettings gettings
iabbr gruping grouping
iabbr grumpt grumpy
iabbr grpe grep
iabbr grousp group
iabbr groupd group
iabbr groudn ground
iabbr groeup group
iabbr greeks Greeks
iabbr greek Greek
iabbr graphicl graphical
iabbr granpda grandpa
iabbr gradinet gradient
iabbr gpu GPU
iabbr gplv3 GPLv3
iabbr gplv2 GPLv2
iabbr gpl GPL
iabbr governorate governor ate
iabbr gous goes
iabbr goto go-to
iabbr goottne gotten
iabbr googel google
iabbr googd good
iabbr golas goals
iabbr golang Golang
iabbr goies goes
iabbr gnu GNU
iabbr gnome GNOME
iabbr gnerator generator
iabbr gneral general
iabbr globla global
iabbr globbla global
iabbr Globbing Globing
iabbr globaly globally
iabbr globall global
iabbr globa global
iabbr gloave glove
iabbr gloabaly globally
iabbr glboal global
iabbr givign giving
iabbr givem given
iabbr githyub GitHub
iabbr github GitHub
iabbr git Git
iabbr gihtyb GitHub
iabbr gihtub GitHub
iabbr gigveaway giveaway
iabbr ghe the
iabbr ghath that
iabbr gettint getting
iabbr getags jags
iabbr gerp grep
iabbr gerbawah terbawah
iabbr genvironment environment
iabbr genra genera
iabbr genereates generates
iabbr generatro generator
iabbr generator Generator
iabbr generatio generation
iabbr generaly generally
iabbr genelra general
iabbr geneerate generate
iabbr genearate generate
iabbr gelongs belongs
iabbr geitting getting
iabbr gaem game
iabbr gactory factory
iabbr gabe gave
iabbr fwiw for what it's worth
iabbr futere future
iabbr furnitrue furniture
iabbr furdamentals fundamentals
iabbr functiono function
iabbr functionnality functionality
iabbr functio function
iabbr functinos functions
iabbr functino function
iabbr funcrion function
iabbr funcamgental fundamental
iabbr fullscreen Fullscreen
iabbr fulfillement fulfillment
iabbr fulfiled fulfilled
iabbr fucntion function
iabbr fucntino function
iabbr frueit fruit
iabbr frou from
iabbr fromat format
iabbr franklin Franklin
iabbr fqa Frequently Asked Question
iabbr fpile file
iabbr fots fonts
iabbr fotns fonts
iabbr fot for
iabbr forsce force
iabbr fornt front
iabbr formater formater
iabbr forma format
iabbr footbal football
iabbr foollow follow
iabbr fo of
iabbr fomr form
iabbr fomrat format
iabbr followint following
iabbr folloiwng following
iabbr fodls folds
iabbr flippe flipper
iabbr fliper flipper
iabbr flie file
iabbr fles files
iabbr fle file
iabbr flatpack flatpak
iabbr flase false
iabbr firtual virtual
iabbr firewalll firewall
iabbr firest first
iabbr firefox Firefox
iabbr finnish finish
iabbr finaly finally
iabbr finallly finally
iabbr fim vim
iabbr fime time
iabbr filterign filtering
iabbr filsystem filesystem
iabbr filse files
iabbr filnally finally
iabbr fil file
iabbr fileter filter
iabbr filell file ll
iabbr filee file
iabbr fiirst first
iabbr fi if
iabbr fiewer viewer
iabbr fierwalls firewalls
iabbr fiels files
iabbr fielsd fields
iabbr fiel file
iabbr fiedl field
iabbr fidn find
iabbr fideo video
iabbr fideos videos
iabbr fiatures features
iabbr fialn final
iabbr ffom from
iabbr feture future
iabbr femoved removed
iabbr federationf federation
iabbr february February
iabbr feb Feb
iabbr fasle false
iabbr faseter faster
iabbr fascimile facsimile
iabbr farenheit Fahrenheit
iabbr falue value
iabbr falues values
iabbr falsee false
iabbr fale false
iabbr fainth faith
iabbr fafourite favorite
iabbr fafourige favorite
iabbr faceook facebook
iabbr exuals equals
iabbr extesnsion extension
iabbr exteremely extremely
iabbr expresssions expressions
iabbr expresssion expression
iabbr expressio expression
iabbr expressino expression
iabbr expresion expression
iabbr expreieces experiences
iabbr exposses exposes
iabbr exponenet exponent
iabbr explicityly explicitly
iabbr experieced experienced
iabbr expansoion expansion
iabbr exmple example
iabbr exixting existing
iabbr exisiting existing
iabbr exif EXIF
iabbr executoion execution
iabbr executeed executed
iabbr executbale executable
iabbr execuiton execution
iabbr execpt except
iabbr exchgen exchange
iabbr exchagne exchange
iabbr excetp except
iabbr excepth except
iabbr excelent excellent
iabbr ew we
iabbr evnet event
iabbr evnent event
iabbr evicde device
iabbr evetn event
iabbr everyting everything
iabbr Everythins Everything
iabbr everythign everything
iabbr evertyhong everything
iabbr evern even
iabbr everest Everest
iabbr Event Evens
iabbr Evens Evans
iabbr evenet event
iabbr evefry every
iabbr eveerywhere everywhere
iabbr eveery every
iabbr eveent event
iabbr evealuated evaluated
iabbr evariable variable
iabbr Evans Evens
iabbr euser user
iabbr europ Europe
iabbr eurasia Eurasia
iabbr etop top
iabbr etner enter
iabbr eth the
iabbr ethernet Ethernet
iabbr etherenet Ethernet
iabbr estring string
iabbr essentialy essentially
iabbr espanssions expansions
iabbr esitimator estimator
iabbr esential essential
iabbr escreen screen
iabbr escapt escape
iabbr es6 ES6
iabbr errror error
iabbr errro error
iabbr erro error
iabbr erpresentaion representation
iabbr eror error
iabbr equivlents equivalents
iabbr equale equal
iabbr eps EPS
iabbr epalace palace
iabbr envv Environment Variables
iabbr environmet environment
iabbr environmen environment
iabbr envireonment environment
iabbr envirenment environment
iabbr envioroment environment
iabbr env ENV
iabbr entrie entire
iabbr entireley entirely
iabbr entier entire
iabbr enterprize enterprise
iabbr enteries entries
iabbr enterface interface
iabbr enlightning enlightening
iabbr english English
iabbr enginering engineering
iabbr enew new
iabbr ener enter
iabbr encapsulete encapsulate
iabbr encapsulae encapsulate
iabbr enalble enable
iabbr enalbes enables
iabbr emulateor emulator
iabbr emphaise emphasis
iabbr emost most
iabbr emebeded embedded
iabbr emali email
iabbr emacs Emacs
iabbr elsg else
iabbr elments elements
iabbr elment element
iabbr elmeent element
iabbr elmeennt element
iabbr eliptical elliptical
iabbr elemtn element
iabbr elemnts elements
iabbr elemnt element
iabbr elementens element ens
iabbr elemenet element
iabbr elememnt element
iabbr elelmnetn element
iabbr elelment element
iabbr elegible eligible
iabbr eleents elements
iabbr eleemnt element
iabbr eleement element
iabbr ele else
iabbr electoronic electronic
iabbr einstein Einstein
iabbr eill will
iabbr eht the
iabbr ehtml HTML
iabbr ehte the
iabbr eho who
iabbr ehave have
iabbr efont font
iabbr effetctiev effective
iabbr effecgt effect
iabbr efect effect
iabbr eevent event
iabbr eelment element
iabbr editror editor
iabbr editro editor
iabbr editin editing
iabbr editign editing
iabbr ediotr editor
iabbr ediging editing
iabbr edifference difference
iabbr edesigned designed
iabbr ecount count
iabbr ecossystem ecosystem
iabbr ecolor color
iabbr ecoh echo
iabbr ecncoded encoded
iabbr ecmascirpt ECMAScript
iabbr ecleoses encloses
iabbr eclare declare
iabbr ecexution execution
iabbr ecanvas canvas
iabbr eb be
iabbr eatch each
iabbr easyly easily
iabbr easeier easier
iabbr earss ears
iabbr earlisest earliest
iabbr earclier earlier
iabbr dynamiclly dynamically
iabbr dwonload download
iabbr dwonlaod download
iabbr dw3m w3m
iabbr dvices devices
iabbr dvice device
iabbr duthch dutch
iabbr dut due
iabbr durin during
iabbr dumsp dumps
iabbr dul 2>/dev/null
iabbr ducth duct
iabbr duble double
iabbr dtes dates
iabbr dtermines determines
iabbr dtat data
iabbr dtatbases databases
iabbr dta data
iabbr dsign design
iabbr driveing driving
iabbr drivefrs drivers
iabbr dring drink
iabbr dreturns returns
iabbr dreturn return
iabbr dpends depends
iabbr dpeak speak
iabbr downt down
iabbr doucument document
iabbr dosplay display
iabbr donwload download
iabbr donw down
iabbr dont don't
iabbr domstringmap DOMStringMap
iabbr dom DOM
iabbr doign doing
iabbr doi do I
iabbr doewn down
iabbr Doesnt doesn't
iabbr doesnt doesn't
iabbr dodnt didn't
iabbr documnet document
iabbr documment document
iabbr documetary documentary
iabbr documen document
iabbr dns DNS
iabbr dleted deleted
iabbr dleimiters delimiters
iabbr django Django
iabbr djacent adjacent
iabbr divverent different
iabbr ditergarai diperbarui
iabbr distrubution distribution
iabbr distor distro
iabbr distictive distinctive
iabbr dissapeear disappear
iabbr displayer displayed
iabbr dispalay display
iabbr disj disc
iabbr directyly directly
iabbr directy directly
iabbr directoyr directory
iabbr directoy Directory
iabbr directoryies directories
iabbr directory Directory
iabbr directoru Directory
iabbr directlye directly
iabbr direcrtory directory
iabbr direcrory directory
iabbr direcotry directory
iabbr direcory directory
iabbr direactory directory
iabbr dipute depute
iabbr dipslaying displaying
iabbr dipslay display
iabbr diplay display
iabbr dinnder dinner
iabbr dimentional dimensional
iabbr dimaspradana4478 disappearance
iabbr dimasksud dimaksud
iabbr dikalim diklaim
iabbr diguui digurui
iabbr difficutl difficult
iabbr differtent different
iabbr differten different
iabbr differnt different
iabbr differents different
iabbr differencitates differentiates
iabbr differenche difference
iabbr Differecne Difference
iabbr differecne difference
iabbr differece difference
iabbr diference difference
iabbr diea idea
iabbr didtn didn't
iabbr didnt didn't
iabbr dibilanng dibilang
iabbr dhcp DHCP
iabbr devidces devices
iabbr devices device's
iabbr developmen development
iabbr developd developed
iabbr develeopment development
iabbr devce device
iabbr devault default
iabbr de the
iabbr determina determine
iabbr detectt detect
iabbr detais detail
iabbr despeickle despickle
iabbr desktop Desktop
iabbr desing design
iabbr descrptor descriptor
iabbr descripttive descriptive
iabbr descriptsionn description
iabbr descriibe describe
iabbr descentants descendants
iabbr descendatn descendant
iabbr depens depends
iabbr dependedn depended
iabbr dependecy dependency
iabbr dended ended
iabbr denagan dengan
iabbr democraicees democracies
iabbr democaracy democracy
iabbr delte delete
iabbr delimitery delimiters
iabbr delimit4r delimiter
iabbr deleter delete
iabbr delcared declared
iabbr dekstop desktop
iabbr degre degree
iabbr defived derived
iabbr definde defined
iabbr defices devices
iabbr defferent different
iabbr deffault default
iabbr defautl default
iabbr deevlopers developers
iabbr decrement decrements
iabbr decodde decode
iabbr declareed declared
iabbr declaratino declaration
iabbr declaraation declaration
iabbr decieded decided
iabbr decenmber December
iabbr decalaration declaration
iabbr debian Debian
iabbr deadlinke deadline
iabbr datetiem datetime
iabbr databae database
iabbr dat3e date
iabbr dashboared dashboard
iabbr darkmde darkmode
iabbr dangef danger
iabbr dahs dash
iabbr daccesed accessed
iabbr cutlere culture
iabbr custormer customer
iabbr custoers customers
iabbr custoamizatios customization
iabbr curucial crucial
iabbr currnet current
iabbr curretn current
iabbr currenty currently
iabbr current current
iabbr curren current
iabbr curetntly currently
iabbr curent current
iabbr curen current
iabbr cummand command
iabbr culter culture
iabbr csv CSV
iabbr csrf CSRF
iabbr croppiing cropping
iabbr creteria criteria
iabbr crete create
iabbr crestes creates
iabbr creationof creation of
iabbr creatingg creating
iabbr creatiion creation
iabbr createor creator
iabbr createing creating
iabbr creat create
iabbr Crearte Create
iabbr creaet create
iabbr crate create
iabbr craete create
iabbr craehting creating
iabbr cr3eate create
iabbr cpu CPU
iabbr cpacity capacity
iabbr coyp copy
iabbr coutnerh counters
iabbr coutner counter
iabbr couse cause
iabbr countrey country
iabbr countdonw countdown
iabbr coulnt count
iabbr couldnt could't
iabbr cotnrol control
iabbr costco Costco
iabbr costatnt constant
iabbr corresoponding corresponding
iabbr coposite composite
iabbr copmuter computer
iabbr coordintae coordinate
iabbr cooose choose
iabbr coomand command
iabbr cookeis cookies
iabbr cooding coding
iabbr conviert convert
iabbr converson conversion
iabbr conventiosn conventions
iabbr conventins conventions
iabbr conttent content
iabbr contol control
iabbr contnent content
iabbr contiue continue
iabbr continous continuous
iabbr continoue continue
iabbr continou continua
iabbr continers containers
iabbr contians contains
iabbr contetn content
iabbr contente content
iabbr conten content
iabbr contemporrary contemporary
iabbr conteint content
iabbr conteent content
iabbr containts contains
iabbr containner container
iabbr containerfs containers
iabbr containder container
iabbr contaiener container
iabbr consumates consummates
iabbr constructr constructor
iabbr constructorr constructor
iabbr construcotr constructor
iabbr constractor constructor
iabbr constatnt constant
iabbr constartints constraints
iabbr constandt constant
iabbr consortioum consortium
iabbr consoel console
iabbr consition condition
iabbr consitent consistent
iabbr consita consist
iabbr consideresd considered
iabbr consciouts conscious
iabbr consciousnewss consciousness
iabbr conrect connect
iabbr conrairner container
iabbr conosle console
iabbr conntent content
iabbr connedctoin connection
iabbr conifig config
iabbr coniditoin condition
iabbr Congratulationo Congratulation
iabbr congainers containers
iabbr congainer container
iabbr confversion conversion
iabbr confucius Confucius
iabbr conformant conform ant
iabbr conformace conformance
iabbr conflic conflict
iabbr confinietn confinient
iabbr confilict conflict
iabbr configurain configuration
iabbr configruraation configuration
iabbr configruation configuration
iabbr confgiure configure
iabbr confert convert
iabbr conetent content
iabbr conentent content
iabbr conent content
iabbr conencted connected
iabbr conecrion connection
iabbr condventtions conventions
iabbr conditinoal conditional
iabbr condision condition
iabbr conde code
iabbr condcept concept
iabbr concurency concurrency
iabbr concespt concept
iabbr concepth concept
iabbr concatination concatenation
iabbr conatainer container
iabbr conatain contain
iabbr comuputer computer
iabbr comunna communal
iabbr comunity community
iabbr comunicates communicates
iabbr computre computer
iabbr compteiiton competition
iabbr comproisign comprising
iabbr comprimising compromising
iabbr composable compossable
iabbr composability compossability
iabbr componnet component
iabbr componente component
iabbr componenet component
iabbr componenent component
iabbr compnay company
iabbr complicance compliance
iabbr completyely completely
iabbr completeley completely
iabbr comphpanies companies
iabbr compay company
iabbr compatibel compatible
iabbr compasion compassion
iabbr comparisson comparison
iabbr compariason comparison
iabbr companty company
iabbr communincation communication
iabbr commnets comments
iabbr commnet comment
iabbr commnd command
iabbr commnand command
iabbr commnad command
iabbr commited committed
iabbr commersial commercial
iabbr commbination combination
iabbr commane command
iabbr comman command
iabbr commadn command
iabbr coment comment
iabbr comand command
iabbr comamnd command
iabbr colunm column
iabbr columnd column
iabbr coloor color
iabbr collow color
iabbr collectiono collection
iabbr collectioin collection
iabbr cojunt count
iabbr cofnlict conflict
iabbr coercioninside coercion inside
iabbr cntainer container
iabbr cntain contain
iabbr cnn CNN
iabbr cna can
iabbr clossest closest
iabbr closign closing
iabbr cloesed closed
iabbr clipboeard clipboard
iabbr cliking clicking
iabbr cliek click
iabbr cli CLI
iabbr clicke click
iabbr clebber clobber
iabbr cleansliness cleanliness
iabbr cleaniess cleanness
iabbr classs class
iabbr classe classes
iabbr classcified classified
iabbr claning cleaning
iabbr ckey key
iabbr civiliation civilization
iabbr citty city
iabbr cirle circle
iabbr cintainer container
iabbr choosen chosen
iabbr chooose choose
iabbr chooisng choosing
iabbr chnanged changed
iabbr chnages changes
iabbr chnage change
iabbr chinld child
iabbr chinese Chinese
iabbr chinas China's
iabbr china China
iabbr chian chain
iabbr cheries cherries
iabbr chekc check
iabbr cheebkbond cheekbone
iabbr checkinf checking
iabbr chatgpt ChatGPT
iabbr chatch catch
iabbr charteuse chanteuse
iabbr chareacter character
iabbr characther character
iabbr charactermode character mode
iabbr charachter character
iabbr changin changing
iabbr changeing changing
iabbr chaneg change
iabbr challange challenge
iabbr challagne challenge
iabbr chagnge change
iabbr chagnet change
iabbr chagne change
iabbr chagen change
iabbr chage change
iabbr chabne change
iabbr chabge change
iabbr cereate create
iabbr cerate create
iabbr centrury century
iabbr cellls cells
iabbr categorrized categorized
iabbr catd card
iabbr catanya caranya
iabbr catalouger cataloger
iabbr carrieage carriage
iabbr carret caret
iabbr capitaal capital
iabbr capilatalize capitalize
iabbr caoused caused
iabbr cant can't
iabbr canonot cannot
iabbr cannonical canonical
iabbr cann can
iabbr cange change
iabbr camelcase CamelCase
iabbr cameara camera
iabbr callled called
iabbr callede called
iabbr caling calling
iabbr calcultor calculator
iabbr calbacks callbacks
iabbr cahllgages challanges
iabbr caceh cache
iabbr bweteen between
iabbr buttton button
iabbr buttermilke buttermilk
iabbr butotn button
iabbr buton button
iabbr bulding building
iabbr buitlin builtin
iabbr buitl built
iabbr builtins builtin
iabbr Builti Built
iabbr builign building
iabbr buddhism Buddhism
iabbr bubling bubbling
iabbr bsd BSD
iabbr brwowser browser
iabbr bruinei Brunei
iabbr brougth brought
iabbr broser browser
iabbr brittel brittle
iabbr british British
iabbr briatain Britain
iabbr breitish British
iabbr breifly briefly
iabbr breezeless breeze less
iabbr brancd brand
iabbr botom bottom
iabbr borneo Borneo
iabbr bolld bold
iabbr boject object
iabbr bnen been
iabbr bnefits benefits
iabbr bluetooth Bluetooth
iabbr bluepritn blueprint
iabbr blocsk blocks
iabbr blinnk blink
iabbr bleow below
iabbr blaue value
iabbr blackjack Blackjack
iabbr blaack black
iabbr binayr binary
iabbr binari binary
iabbr bigint BigInt
iabbr bidies bodies
iabbr bi be
iabbr beyon beyond
iabbr betwoeen between
iabbr betweein between
iabbr betweeen between
iabbr betwee between
iabbr bettwer better
iabbr bett4er better
iabbr beter better
iabbr berperngaruh berpengaruh
iabbr berkutat berkarat
iabbr beradasarkan berdasarkan
iabbr benjamin Benjamin
iabbr benefeits benefits
iabbr belive believe
iabbr beleiefes belief's
iabbr beiing being
iabbr beigin begin
iabbr begining beginning
iabbr beginers beginners
iabbr beginer beginner
iabbr begginsers beginners
iabbr begginer beginner
iabbr befor before
iabbr befoer before
iabbr beegitu begitu
iabbr becuase because
iabbr becsouse because
iabbr becouse because
iabbr becoem become
iabbr bechmarking benchmarking
iabbr becasuse because
iabbr becasue because
iabbr bcaause because
iabbr batt4ery battery
iabbr bationg bathing
iabbr basichs basics
iabbr bashic basic
iabbr bandwith bandwidth
iabbr bandung Bandung
iabbr bahea bahwa
iabbr badnwith bandwidth
iabbr backto back to
iabbr backpsace backspace
iabbr backgroudn background
iabbr backgourund background
iabbr backgorund background
iabbr bacany bacanya
iabbr bacanya bapanya
iabbr babby baby
iabbr ayre are
iabbr awesonme awesome
iabbr awati await
iabbr awater water
iabbr avter after
iabbr avodi avoid
iabbr avim Vim
iabbr avariables variables
iabbr avalilabel available
iabbr avaliable available
iabbr availabel available
iabbr aututst august
iabbr autoryti authority
iabbr automaticaly automatically
iabbr autohr author
iabbr australia Australia
iabbr aur AUR
iabbr atuo atau
iabbr attriubute attribute
iabbr attriubures attributes
iabbr attriburte attribute
iabbr attribure attribute
iabbr attribbute attribute
iabbr attrbiute attribute
iabbr atrtributes attributes
iabbr atributte attribute
iabbr atchitecture architecture
iabbr ataou atau
iabbr Asychronous Asynchronous
iabbr assyria Assyria
iabbr assyra Assyria
iabbr asssignmenet assignment
iabbr assinging assigning
iabbr assignmenet assignment
iabbr assignend assigned
iabbr assignement assignment
iabbr Assgnment Assignment
iabbr assgiined assigned
iabbr assembyl assembly
iabbr asmaller smaller
iabbr asigned assigned
iabbr ashemed ashamed
iabbr asean ASEAN
iabbr ascii ASCII
iabbr ascces access
iabbr articel article
iabbr arsterisk asterisk
iabbr arry array
iabbr arrray array
iabbr arros arrows
iabbr aroung around
iabbr aroud around
iabbr arithmethic arithmetic
iabbr aristotles Aristotle's
iabbr aristoteles Aristotle's
iabbr argumets arguments
iabbr argumetn argument
iabbr argument Argument
iabbr argumenet argument
iabbr argumant argument
iabbr argumaet argument
iabbr arguent argument
iabbr arethmatic arithmetic
iabbr areound around
iabbr arent aren't
iabbr archieve achieve
iabbr archeology archaeology
iabbr aray array
iabbr aratio ratio
iabbr ar are
iabbr arabic Arabic
iabbr apsp apps
iabbr aprop prop
iabbr apreciated appreciated
iabbr appoririate appropriate
iabbr applicatoin application
iabbr applicaiton application
iabbr appication application
iabbr apperars appears
iabbr apperantly apparently
iabbr appera appear
iabbr aply apply
iabbr apis APIs
iabbr apiril April
iabbr api API
iabbr apge page
iabbr aperthei apartheid
iabbr apera appear
iabbr apend append
iabbr apaplication application
iabbr apache Apache
iabbr aournd around
iabbr aoperaotor operator
iabbr anywhre anywhere
iabbr anyting anything
iabbr anythign anything
iabbr antio nation
iabbr answre answer
iabbr answere answer
iabbr ansi ANSI
iabbr ansd and
iabbr anoying annoying
iabbr anothere another
iabbr anothe another
iabbr anotehr another
iabbr anoteher another
iabbr anny any
iabbr annimation animation
iabbr annd and
iabbr anme name
iabbr animatino animation
iabbr animamte animate
iabbr anhy any
iabbr ane and
iabbr andwer answer
iabbr android Android
iabbr andn and
iabbr anderstand understand
iabbr anceient ancient
iabbr amtrix matrix
iabbr amreicans Americans
iabbr amont among
iabbr amon among
iabbr amke make
iabbr amil mail
iabbr america America
iabbr amenalbe amenable
iabbr amattresses mattresses
iabbr amaka maka
iabbr alwyas always
iabbr alwsys always
iabbr alwasy always
iabbr altoogether altogether
iabbr alternatvies alternatives
iabbr alternativeley alternatively
iabbr alsert alert
iabbr alse also
iabbr alowing allowing
iabbr aloso also
iabbr aloiwn allowing
iabbr alocate allocate
iabbr alnalyze analyze
iabbr allwah Allah
iabbr alllow allow
iabbr alll all
iabbr allignment alignment
iabbr allign align
iabbr alliaxe Allliance
iabbr allah Allah SWT
iabbr aliasses aliases
iabbr alfabet alphabet
iabbr alements aliments
iabbr albert Albert
iabbr akunbarudanzor unburdens
iabbr aksk ask
iabbr ake take
iabbr airbnb Airbnb
iabbr ai I
iabbr ahve have
iabbr aht that
iabbr ahs has
iabbr ahd add
iabbr agian again
iabbr aggresively aggressively
iabbr agge age
iabbr aggain again
iabbr agaoin again
iabbr againe again
iabbr afternoon Afternoon
iabbr aftern after
iabbr affectionaly affectionaly
iabbr afater after
iabbr aer are
iabbr aempty empty
iabbr ae are
iabbr advantagge advantage
iabbr adress address
iabbr adnroid android
iabbr adn and
iabbr administor administer
iabbr adfantages advantages
iabbr adeueduct aqueduct
iabbr addres address
iabbr addr3ess address
iabbr addd add
iabbr adala adalah
iabbr adadnya adanya
iabbr actualy actually
iabbr actoualy actually
iabbr activ active
iabbr acrual actual
iabbr acrion action
iabbr acpi ACPI
iabbr acessed accessed
iabbr acess acess
iabbr acdounts accounts
iabbr accros across
iabbr accronym acronym
iabbr accoutn account
iabbr accomodat accommodate
iabbr accidently accidentally
iabbr accetp accept
iabbr accetntuate accentuate
iabbr accest access
iabbr accesss access
iabbr accesing accessing
iabbr accesiblity accessibility
iabbr accesibility accessibility
iabbr accesbility accessibility
iabbr acces access
iabbr accepth accept
iabbr acccess access
iabbr abslute absolute
iabbr abscne absence
iabbr abraham Abraham
iabbr abouit about
iabbr abou about
iabbr aboout about
iabbr aboiut about
iabbr aboev above
iabbr aboeeve above
iabbr abobve above
iabbr abbrevieate abbreviate
iabbr aarray array
iabbr aare are
iabbr 3secon second
cabbr t term
cabbr mason Mason
cabbr man Man
cabbr lspinfo Lspinfo
cabbr lsit list
cabbr lazy Lazy
cabbr fidn find
cabbr fdin find
cabbr epo e /home/dandi/.config/nvim/lua/dandi/abbrev/typos.lua
cabbr ego e /home/dandi/.config/nvim/lua/dandi/abbrev/go.lua
cabbr ewq wq
cabbr sex Sexplore
cabbr bahs bash
cabbr rex Rexplore
cabbr waq wqa!
cabbr bd bd!
cabbr bdm bd!
cabbr ifn fin
cabbr ew wq
cabbr qam qa
cabbr ex Ex
cabbr w w!
cabbr qm q!
cabbr qw wq
cabbr hg helpgrep
cabbr wqa wqa!
cabbr wqm wq
cabbr q q!
cabbr qq q!
cabbr qa qa!
cabbr wq wq!
cabbr fzf FZF
cabbr n norm
let &cpo=s:cpo_save
unlet s:cpo_save
set autochdir
set autoindent
set autoread
set background=dark
set backspace=indent,eol,start
set backupdir=~/.cache/vim/backup//
set completeopt=menu,fuzzy
set directory=~/.cache/vim/swap//
set expandtab
set fileencodings=ucs-bom,utf-8,default,latin1
set grepprg=git\ grep\ -n
set guicursor=
set helplang=en
set hidden
set ignorecase
set incsearch
set isfname=@,48-57,/,.,-,_,+,,,#,$,%,~,=,@-@
set nojoinspaces
set laststatus=0
set listchars=tab:→\ ,eol:↲
set path=.,/usr/include,,,**
set ruler
set runtimepath=~/.vim,~/.vim/plugged/vim-commentary,~/.vim/plugged/fzf,~/.vim/plugged/vim-titlecase,/usr/share/vim/vimfiles,/usr/share/vim/vim91,/usr/share/vim/vimfiles/after,~/.vim/after
set shiftwidth=4
set showmatch
set smartcase
set smartindent
set softtabstop=4
set spelllang=en_us
set splitright
set suffixes=.bak,~,.o,.info,.swp,.aux,.bbl,.blg,.brf,.cb,.dvi,.idx,.ilg,.ind,.inx,.jpg,.log,.out,.png,.toc,.snap
set noswapfile
set tabpagemax=5
set tabstop=4
set textwidth=120
set undodir=~/.vim/undodir
set undofile
set updatetime=50
set visualbell
set wildignore=*.exe,*.dll,*.pdb,.*.o,*.obj
set wildignorecase
set wildmenu
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/repos/github.com/yuandandi/learn/lreact/create-react-app/tutorial-react-cra/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +0 ~/repos/github.com/yuandandi/learn/lreact/create-react-app/tutorial-react-cra/src/App.js
argglobal
%argdel
$argadd App.js
edit ~/repos/github.com/yuandandi/learn/lreact/create-react-app/tutorial-react-cra/src/App.js
argglobal
let s:cpo_save=&cpo
set cpo&vim
inoremap <buffer> <C-G>p ?>
inoremap <buffer> <C-G>n />
inoremap <buffer> <C-G>< d/<
inoremap <buffer> <C-G>> ct>
inoremap <buffer> <C-B> ?>
nnoremap <buffer> du ggVG:norm _wgUlgv:norm f.wgUl
nnoremap <buffer> ge _f>w~:w
nnoremap <buffer> gca A <!-- --><Left><Left><Left>
nnoremap <buffer> gomd :%norm _i1. ggVG:norm _wgUlgv:norm f.wgUlgvojg
nnoremap <buffer> o :wo
nnoremap <buffer> s cit
inoremap <buffer>  ?>
inoremap <buffer> p ?>
inoremap <buffer> n />
inoremap <buffer> < d/<
inoremap <buffer> > ct>
iabbr <buffer> nch nth-child()<Left>
iabbr <buffer> sli slice()<Left>
iabbr <buffer> rep replace("old", "new")<Left>
iabbr <buffer> subs substring()<Left>
iabbr <buffer> ind indexOf()<Left>
iabbr <buffer> tus toUTCString()
iabbr <buffer> tup toUpperCase()
iabbr <buffer> tlo toLowerCase()
iabbr <buffer> oke Object.keys()<Left>
iabbr <buffer> mapp map()<Left>
iabbr <buffer> fil filter()<Left>
iabbr <buffer> redu reduce()<Left>
iabbr <buffer> tch target.checked
iabbr <buffer> tva target.value
iabbr <buffer> vof valueOf()
iabbr <buffer> tpr toPrecision()
iabbr <buffer> tlts toLocaleTimeString()
iabbr <buffer> tlds toLocaleString()
iabbr <buffer> tls toLocaleString()
iabbr <buffer> tfi toFixed()
iabbr <buffer> tst toString()<Left>
iabbr <buffer> scy screenY
iabbr <buffer> scx screenX
iabbr <buffer> pay pageY
iabbr <buffer> pax pageX
iabbr <buffer> ofy offsetY
iabbr <buffer> ofx offsetX
iabbr <buffer> cly clientY
iabbr <buffer> clx clientX
iabbr <buffer> cva current.value
iabbr <buffer> cta currentTarget
iabbr <buffer> tist timestamp
iabbr <buffer> hel HTMLElement
iabbr <buffer> le let
iabbr <buffer> va var
iabbr <buffer> co const
iabbr <buffer> abs abstract
iabbr <buffer> impl implements
iabbr <buffer> int interface
iabbr <buffer> vo void
iabbr <buffer> rg RegExp
iabbr <buffer> nu number
iabbr <buffer> bo boolean
iabbr <buffer> st string
iabbr <buffer> eve every()<Left>
iabbr <buffer> isa isArray()<Left>
iabbr <buffer> afr Array.from()
iabbr <buffer> ais Array.isArray()
iabbr <buffer> fla flat()<Left>
iabbr <buffer> conc concat()<Left>
iabbr <buffer> joi join("")<Left><Left>
iabbr <buffer> sit setItem()<Left>
iabbr <buffer> spl splice()<Left>
iabbr <buffer> sin setInterval()<Left>
iabbr <buffer> uns unshift()<Left>
iabbr <buffer> shi shift()<Left>
iabbr <buffer> sst sessionStorage
iabbr <buffer> thenn then("")<Left><Left>
iabbr <buffer> pro promise()<Left>
iabbr <buffer> rej reject()<Left>
iabbr <buffer> res resolve()<Left>
iabbr <buffer> mab Math.abs()<Left>
iabbr <buffer> msq Math.sqrt()<Left>
iabbr <buffer> mra Math.random()<Left>
iabbr <buffer> mmi Math.min()<Left>
iabbr <buffer> mma Math.max()<Left>
iabbr <buffer> mpo Math.pow()<Left>
iabbr <buffer> mce Math.ceil()<Left>
iabbr <buffer> mro Math.round()<Left>
iabbr <buffer> mfr Math.floor(Math.random())<Left>
iabbr <buffer> mfl Math.floor()<Left>
iabbr <buffer> imre import React from "react"
iabbr <buffer> rfr React.Fragment
iabbr <buffer> rur React.useRef()<Left>
iabbr <buffer> rue React.useEffect()<Left>
iabbr <buffer> rre ReactDOM.render()<Left>
iabbr <buffer> cse createServer()<Left>
iabbr <buffer> mkd mdkir("")<Left><Left>
iabbr <buffer> rmd rmdir("")<Left><Left>
iabbr <buffer> cws createWriteStream("")<Left><Left>
iabbr <buffer> crs createReadStream("")<Left><Left>
iabbr <buffer> pjo path.join(__dirname, "")<Left><Left>
iabbr <buffer> unl unlink()<Left>
iabbr <buffer> afi appendfile()<Left>
iabbr <buffer> wfi writeFile()<Left>
iabbr <buffer> rfi readFile()<Left>
iabbr <buffer> ver version()
iabbr <buffer> hdi homedir()
iabbr <buffer> rec Record
iabbr <buffer> ake altKey
iabbr <buffer> cke ctrlKey
iabbr <buffer> ske shiftKey
iabbr <buffer> chan change
iabbr <buffer> kdo keydown
iabbr <buffer> kup keyup
iabbr <buffer> kpr keypress
iabbr <buffer> ge get()<Left>
iabbr <buffer> rwi replaceWith()<Left>
iabbr <buffer> ibe insertBefore()<Left>
iabbr <buffer> ben beforeend
iabbr <buffer> abe afterbegin
iabbr <buffer> bbe beforebegin
iabbr <buffer> aen afterend
iabbr <buffer> iah insertAdjacentHTML("",)<Left><Left><Left>
iabbr <buffer> iat insertAdjacentText("",)<Left><Left><Left>
iabbr <buffer> iae insertAdjacentElement("",)<Left><Left><Left>
iabbr <buffer> fda FormData()<Left>
iabbr <buffer> inf Infinity
iabbr <buffer> hie HTMLImageElement
iabbr <buffer> sy scrollY
iabbr <buffer> sx scrollX
iabbr <buffer> iwi innerWidth
iabbr <buffer> ihe innerHeight
iabbr <buffer> def default
iabbr <buffer> num Number()<Left>
iabbr <buffer> cle clear()<Left>
iabbr <buffer> crea create()<Left>
iabbr <buffer> spr stopPropagation()
iabbr <buffer> jso json()
iabbr <buffer> jst JSON.stringify()<Left>
iabbr <buffer> jpa JSON.parse()<Left>
iabbr <buffer> clf console.log("foo")<Left>
iabbr <buffer> clt console.log(typeof )<Left>
iabbr <buffer> cg console.group();console.groupEnd()k0ci(""<Left>
iabbr <buffer> cw console.warn()<Left>
iabbr <buffer> ct console.table()<Left>
iabbr <buffer> cc console.clear()<Left>
iabbr <buffer> ce console.error()<Left>
iabbr <buffer> cll console.log({  })<Left><Left><Left>
iabbr <buffer> cd console.dir()<Left>
iabbr <buffer> cl console.log()<Left>
iabbr <buffer> smar style.margin = ""<Left>
iabbr <buffer> stra style.transform = ""<Left>
iabbr <buffer> slef style.left = ""<Left>
iabbr <buffer> sdis style.display = ""<Left>
iabbr <buffer> scol style.color = ""<Left>
iabbr <buffer> sbot style.bottom = ""<Left>
iabbr <buffer> shei style.height = ""<Left>
iabbr <buffer> swid style.width = ""<Left>
iabbr <buffer> spad style.padding = ""<Left>
iabbr <buffer> sbra style.borderRadius = ""<Left>
iabbr <buffer> sbco style.backgroundColor = ""<Left>
iabbr <buffer> sbor style.border = ""<Left>;
iabbr <buffer> stde style.textDecoration = ""<Left>
iabbr <buffer> sjco style.justifyContent = ""<Left>
iabbr <buffer> srig style.right = ""<Left>
iabbr <buffer> ael addEventListener("")<Left><Left>
iabbr <buffer> dti datetime
iabbr <buffer> idt Intl.DateTimeFormat('').format()F'i
iabbr <buffer> dno Date.now()<Left>
iabbr <buffer> dtf DateTimeFormat()<Left>
iabbr <buffer> onsu onSubmit={}<Left>
iabbr <buffer> onch onChange={}<Left>
iabbr <buffer> oncl onClick={}<Left>
iabbr <buffer> edc export default class{}kf{i
iabbr <buffer> edf export default function() {return ()}?ionwi
iabbr <buffer> win window
iabbr <buffer> whi while () {}kf(a
iabbr <buffer> ust "use strict"
iabbr <buffer> upd udpate()<Left>
iabbr <buffer> und undefined
iabbr <buffer> isn isNaN()<Left>
iabbr <buffer> tog toggle('')<Left><Left>
iabbr <buffer> tco textContent
iabbr <buffer> swi switch() {}k0ci(
iabbr <buffer> sto style.top = ""<Left>
iabbr <buffer> sti setTimeout()<Left>
iabbr <buffer> sat setAttribute()<Left>
iabbr <buffer> san setAttributeNode()<Left>
iabbr <buffer> rit removeItem("")<Left><Left>
iabbr <buffer> rgba rgba()<Left>
iabbr <buffer> reviewdao ReviewDAO
iabbr <buffer> ret return
iabbr <buffer> rem remove()<Left>
iabbr <buffer> rch removeChild()<Left>
iabbr <buffer> rat removeAttribute('')<Left><Left>
iabbr <buffer> raf requestAnimationFrame()<Left>
iabbr <buffer> qs querySelector("")<Left><Left>
iabbr <buffer> qsa querySelectorAll("")<Left><Left>
iabbr <buffer> pyo pageYOffset
iabbr <buffer> pus push()<Left>
iabbr <buffer> pop pop()<Left>
iabbr <buffer> pno parentNode
iabbr <buffer> pin parseInt()<Left>
iabbr <buffer> pel parentElement
iabbr <buffer> pde preventDefault()
iabbr <buffer> pau pause('')<Left><Left>
iabbr <buffer> oto offsetTop
iabbr <buffer> ofr Object.freeeze()<Left>;
iabbr <buffer> npr new Promise()<Left>
iabbr <buffer> nda new Date()<Left>
iabbr <buffer> mongodb mongodb
iabbr <buffer> mat matches('')<Left><Left>
iabbr <buffer> lth line-through
iabbr <buffer> lst localStorage
iabbr <buffer> lsi window.localStorage.setItem()<Left>
iabbr <buffer> l let
iabbr <buffer> lgi window.localStorage.getItem()<Left>
iabbr <buffer> len length
iabbr <buffer> lcl localStorage.clear()
iabbr <buffer> ite innerText
iabbr <buffer> imp import
iabbr <buffer> ima Image()<Left>
iabbr <buffer> i i
iabbr <buffer> oht outerHTML
iabbr <buffer> iht innerHTML
iabbr <buffer> iff if () {}?(a
iabbr <buffer> eif else if
iabbr <buffer> ifel if () {} else if () {} else {}{jjf(i?^ifci(
iabbr <buffer> ifb if (hasSolvedChallenge === true && hasHintsLeft === true) {}
iabbr <buffer> hop hasOwnProperty()<Left>
iabbr <buffer> gti getTime()<Left>
iabbr <buffer> gmo getMonth()<Left>
iabbr <buffer> gmi getMinutes()<Left>
iabbr <buffer> git getItem()<Left>
iabbr <buffer> gho getHours()<Left>
iabbr <buffer> gfy getFullYear()<Left>
iabbr <buffer> gday getDay()<Left>
iabbr <buffer> gda getDate()<Left>
iabbr <buffer> gco getContext('')<Left><Left>
iabbr <buffer> gbcr getBoundingClientRect()<Left>
iabbr <buffer> gat getAttribute("")<Left><Left>
iabbr <buffer> fre fillRect()<Left>
iabbr <buffer> fori for (let i = 0; i < messages.length; i++) {console.log(messages[i]);}
iabbr <buffer> fo for () {}kf(a
iabbr <buffer> fn function () {}?(i
iabbr <buffer> fin finally zp
iabbr <buffer> f function() {}?(i
iabbr <buffer> fea forEach()<Left>
iabbr <buffer> fal false
iabbr <buffer> ex export
iabbr <buffer> dse dataset
iabbr <buffer> qse querySelector("")<Left><Left>
iabbr <buffer> dqs document.querySelector("")<Left><Left>
iabbr <buffer> dqsa document.querySelectorAll("")<Left><Left>
iabbr <buffer> dlh document.location.href
iabbr <buffer> dim drawImage()<Left>
iabbr <buffer> dcl DOMContentLoaded
iabbr <buffer> ctq chrome.tabs.query()<Left>
iabbr <buffer> cre classList.remove("")<Left><Left>
iabbr <buffer> crec clearRect()<Left>
iabbr <buffer> cna className
iabbr <buffer> cli classList
iabbr <buffer> cin clearInterval()<Left>
iabbr <buffer> bre break
iabbr <buffer> cco classList.contains("")<Left><Left>
iabbr <buffer> catt createAttribute('')<Left><Left>
iabbr <buffer> catc catch()<Left>
iabbr <buffer> cad classList.add("")<Left><Left>
iabbr <buffer> boo Boolean()<Left>
iabbr <buffer> awa await()<Left>
iabbr <buffer> ape append()<Left>
iabbr <buffer> ad add("")<Left><Left>
iabbr <buffer> inc includes()<Left>
iabbr <buffer> ach appendChild()<Left>
iabbr <buffer> pfl parseFloat()<Left>
iabbr <buffer> iin isInteger()<Left>
iabbr <buffer> resi resize
iabbr <buffer> den dragend
iabbr <buffer> dra drag
iabbr <buffer> dst dragstart
iabbr <buffer> mov mouseover
iabbr <buffer> whe wheel
iabbr <buffer> mup mouseup
iabbr <buffer> mdo mousedown
iabbr <buffer> cmn contextmenu
iabbr <buffer> rst readyState
iabbr <buffer> rsc readystatechange
iabbr <buffer> clisk click
iabbr <buffer> dbl dblclick
iabbr <buffer> mou mouseout
iabbr <buffer> repch replaceChild(newChld, oldChild)<Left>
iabbr <buffer> ctn createTextNode("")<Left><Left>;
iabbr <buffer> cel createElement("")<Left><Left>;
iabbr <buffer> dct document.createTextNode("")<Left><Left>
iabbr <buffer> dce document.createElement("")<Left><Left>
iabbr <buffer> dal document.all
iabbr <buffer> dwr document.write("")<Left><Left>
iabbr <buffer> gbi getElementById("")<Left><Left>
iabbr <buffer> gbc getElementsByClassName("")<Left><Left>
iabbr <buffer> gbt getElementsByTagName("")<Left><Left>
iabbr <buffer> dbt document.getElementsByTagName("")<Left><Left>
iabbr <buffer> dbi document.getElementById("")<Left><Left>
iabbr <buffer> dbc document.getElementsByClassName("")<Left><Left>
iabbr <buffer> ext extends
iabbr <buffer> tof typeof
iabbr <buffer> kof keyof
iabbr <buffer> pes previousElementSibling
iabbr <buffer> psi previousSibling
iabbr <buffer> nes nextElementSibling
iabbr <buffer> nsi nextSibling
iabbr <buffer> lec lastElementChild
iabbr <buffer> lch lastChild
iabbr <buffer> fec firstElementChild
iabbr <buffer> nna nodeName
iabbr <buffer> fch first-child
iabbr <buffer> cno childNodes
iabbr <buffer> chi children
iabbr <buffer> req require("")<Left><Left>
iabbr <buffer> ale alert("")<Left><Left>
iabbr <buffer> wid width=""<Left>
iabbr <buffer> val value
iabbr <buffer> typ type
iabbr <buffer> tit title=""<Left>
iabbr <buffer> tar target
iabbr <buffer> tarb target="_blank"
iabbr <buffer> styl style=""<Left>
iabbr <buffer> sta station=""<Left>
iabbr <buffer> star start=""<Left>
iabbr <buffer> sreact <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script><script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script><script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
iabbr <buffer> src src=""<Left>
iabbr <buffer> srcl srclang=""<Left>
iabbr <buffer> seta setAttribute();<Left><Left>
iabbr <buffer> rev reverse()<Left>
iabbr <buffer> rel removeEventListener("")<Left><Left>
iabbr <buffer> quo &#10077;&#10078;F;a
iabbr <buffer> pp p
iabbr <buffer> pla placeholder=""<Left>
iabbr <buffer> onc onclick =
iabbr <buffer> ofs offscreen
iabbr <buffer> navv nav
iabbr <buffer> nam name=""<Left>
iabbr <buffer> mut muted
iabbr <buffer> min min=""<Left>
iabbr <buffer> maxx max=""<Left>
iabbr <buffer> maxl maxlength=""<Left>
iabbr <buffer> loo loop
iabbr <buffer> lang lang=""<Left>
iabbr <buffer> labe label=""<Left>
iabbr <buffer> kin kind=""<Left>
iabbr <buffer> jss JavaScript
iabbr <buffer> id id=""<Left>
iabbr <buffer> ic <i class=""></i>F"i
iabbr <buffer> hypen &#8221; &#8212;
iabbr <buffer> hre href=""<Left>
iabbr <buffer> heq http-equiv=""<Left>
iabbr <buffer> hei height
iabbr <buffer> heade <header></header>cit
iabbr <buffer> headec <header class=""></header>?"
iabbr <buffer> forr for=""<Left>
iabbr <buffer> fongo <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" crossorigin>
iabbr <buffer> fonmi <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
iabbr <buffer> fonaw <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" /> 
iabbr <buffer> dto data-tooltip=""<Left>
iabbr <buffer> dir dir=""<Left>
iabbr <buffer> der <header class=""></header>?"
iabbr <buffer> datet datetime=""<Left>
iabbr <buffer> cont contains("")<Left><Left>
iabbr <buffer> condw content="width=device-width, initial-scale=1"
iabbr <buffer> con constructor(){}O
iabbr <buffer> cols cols=""<Left>
iabbr <buffer> cla class
iabbr <buffer> cit cite=""<Left>
iabbr <buffer> che checkbox
iabbr <buffer> blan _blank
iabbr <buffer> aut autoplay
iabbr <buffer> acti action=""<Left>
iabbr <buffer> cha charAt()<Left>
iabbr <buffer> ulia <ul class=""><li><a href="#" class=""></a></li></ul>kkkkci"
iabbr <buffer> var <var></var>cit
iabbr <buffer> vid <video width="" height="" controls></video>cithei
iabbr <buffer> ulc <ul class=""></ul>kf"a
iabbr <buffer> uu <u></u>cit
iabbr <buffer> tex toExponential()
iabbr <buffer> tra transform
iabbr <buffer> thea <thead></thead>C-o>O
iabbr <buffer> tbo <tbody></tbody>O
iabbr <buffer> tfo <tfoot></tfoot>O
iabbr <buffer> timd <time datetime=""></time>citCR>
iabbr <buffer> th <th></th>cit
iabbr <buffer> sum <summary></summary>cit
iabbr <buffer> sec <section></section>cit
iabbr <buffer> scr scroll
iabbr <buffer> sel <select></select>O
iabbr <buffer> sou <source src="" type="">
iabbr <buffer> ul <ul></ul>cit
iabbr <buffer> tr <tr></tr>cit
iabbr <buffer> titl <title></title>O
iabbr <buffer> td <td></td>cit
iabbr <buffer> tab <table></table>cit
iabbr <buffer> sup super()<Left>
iabbr <buffer> sub submit
iabbr <buffer> stys stylesheet
iabbr <buffer> sty style
iabbr <buffer> spa <span></span>cit
iabbr <buffer> sma <small></small>cit
iabbr <buffer> sam <samp></samp>cit
iabbr <buffer> ss <s></s>cit
iabbr <buffer> rub <ruby></ruby>O
iabbr <buffer> rt <rt></rt>cit
iabbr <buffer> rp <rp></rp>cit
iabbr <buffer> prog <progress value="" max=""></progress>citmax
iabbr <buffer> pre <pre></pre>cit
iabbr <buffer> pi <p id=""></p>citCR>
iabbr <buffer> pci <p class="" id=""></p>citCR>
iabbr <buffer> pcc <p class=""></p>cit<Left><Left>
iabbr <buffer> param <param name="" value="">citval
iabbr <buffer> p <p></p>cit
iabbr <buffer> outp <output name="" for=""></output>citfor
iabbr <buffer> optg <optgroup></optgroup>O
iabbr <buffer> opt <option value=""></option>citCR>
iabbr <buffer> oli <ol id=""></ol>citCR>
iabbr <buffer> olci <ol class="" id=""></ol>citid
iabbr <buffer> ol <ol></ol>cit
iabbr <buffer> obj Object
iabbr <buffer> nos <noscript></noscript>cit
iabbr <buffer> nav <nav></nav>cit
iabbr <buffer> mete <meter value=""></meter>citCR>
iabbr <buffer> menui <menuitem></menuitem>
iabbr <buffer> men <menu></menu>cit
iabbr <buffer> del delete<Left>
iabbr <buffer> mar <mark></mark>cit
iabbr <buffer> map <map name=""></map>citCR>
iabbr <buffer> mai <main></main>cit
iabbr <buffer> meth method=""<Left>
iabbr <buffer> met <meta name="" content="">0ci"
iabbr <buffer> lin <link rel="" href="">?" hre
iabbr <buffer> li <li></li>cit
iabbr <buffer> lege <legend></legend>cit
iabbr <buffer> lab <label for=""></label>?"
iabbr <buffer> keyg <keygen name="">
iabbr <buffer> kbd <kbd></kbd>cit
iabbr <buffer> inp <input type="" name="" value="" />?" nam
iabbr <buffer> imgg <img src="" alt="" />?" al
iabbr <buffer> ifr <iframe src=""></iframe>?"
iabbr <buffer> htmll <html></html>O
iabbr <buffer> htm <html></html>O
iabbr <buffer> hr <hr>
iabbr <buffer> hgr <hgroup></hgroup>O
iabbr <buffer> hea <head></head>cit
iabbr <buffer> h6 <h6></h6>cit
iabbr <buffer> h5 <h5></h5>cit
iabbr <buffer> h4 <h4></h4>cit
iabbr <buffer> h3 <h3></h3>cit
iabbr <buffer> h2 <h2></h2>cit
iabbr <buffer> h1 <h1></h1>cit
iabbr <buffer> formm <form></form>cit
iabbr <buffer> foot <footer></footer>cit
iabbr <buffer> cap <caption></caption>cit
iabbr <buffer> figc <figcaption></figcaption>cit
iabbr <buffer> fig <figure></figure>cit
iabbr <buffer> fie <fieldset></fieldset>O
iabbr <buffer> emb <embed src=""></embed>?">
iabbr <buffer> em <em></em>cit
iabbr <buffer> dt <dt></dt>cit
iabbr <buffer> doc document
iabbr <buffer> divi <div id=""></div>?"
iabbr <buffer> divci <div class="" id=""></div>?" id
iabbr <buffer> divc <div class=""></div>?">
iabbr <buffer> div <div></div>cit
iabbr <buffer> dial <dialog></dialog>O
iabbr <buffer> dfn <dfn></dfn>cit
iabbr <buffer> det <details></details>O
iabbr <buffer> dd <dd></dd>cit
iabbr <buffer> datal <datalist></datalist>O
iabbr <buffer> dat Date()<Left>
iabbr <buffer> cpr Copyright (c) 2023 Dandi. All Rights Reserved.
iabbr <buffer> col <col>
iabbr <buffer> cod <code></code>cit
iabbr <buffer> cite <cite></cite>cit
iabbr <buffer> canv <canvas id=""></canvas>F"i
iabbr <buffer> butto <button></button>cit
iabbr <buffer> br <br>
iabbr <buffer> bod <body></body>O
iabbr <buffer> blo <blockquote cite=""></blockquote>?">
iabbr <buffer> bi <big></big>cit
iabbr <buffer> str <strong></strong>cit
iabbr <buffer> q <q></q>cit
iabbr <buffer> ii <i></i>cit
iabbr <buffer> bdo <bdo dir=""></bdo>?">
iabbr <buffer> bdi <bdi></bdi>cit
iabbr <buffer> b <b></b>cit
iabbr <buffer> bas <base href="" target="">
iabbr <buffer> aud <audio controls></audio>
iabbr <buffer> asi <aside></aside>cit
iabbr <buffer> cen <center></center>cit
iabbr <buffer> arti <article></article>O
iabbr <buffer> areaa <area shape="" coords="" href="" alt="">" co
iabbr <buffer> ah <a href=""></a>?">i
iabbr <buffer> addr <address></address>O
iabbr <buffer> abb <abbr title=""></abbr>?"
iabbr <buffer> !!! <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>document</title><link rel="stylesheet" type="text/css" href="styles.css" /></head><body></body></html>
let &cpo=s:cpo_save
unlet s:cpo_save
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal backupcopy=
setlocal balloonexpr=
setlocal nobinary
setlocal nobreakindent
setlocal breakindentopt=
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),0],:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinscopedecls=public,protected,private
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=sO:*\ -,mO:*\ \ ,exO:*/,s1:/*,mb:*,ex:*/,://
setlocal commentstring=//\ %s
setlocal complete=.,w,b,u,t,i
setlocal completefunc=
setlocal completeopt=
setlocal concealcursor=
setlocal conceallevel=0
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal cursorlineopt=both
setlocal define=\\(^\\s*(*async\\s\\+function\\|(*function\\)\\|^\\s*\\(\\*\\|static\\|async\\|get\\|set\\|\\i\\+\\.\\)\\|^\\s*\\(\\ze\\i\\+\\)\\(([^)]*).*{$\\|\\s*[:=,]\\)\\|^\\s*\\(export\\s\\+\\|export\\s\\+default\\s\\+\\)*\\(var\\|let\\|const\\|function\\|class\\)\\|\\<as\\>
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript'
setlocal filetype=javascript
endif
setlocal fillchars=
setlocal fixendofline
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
set foldlevel=999
setlocal foldlevel=999
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal formatoptions=tcq
setlocal formatprg=
setlocal grepprg=
setlocal iminsert=0
setlocal imsearch=-1
setlocal include=
setlocal includeexpr=
setlocal indentexpr=GetJavascriptIndent()
setlocal indentkeys=0{,0},0),0],:,0#,!^F,o,O,e,0],0)
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal lispoptions=
setlocal lispwords=
setlocal nolist
setlocal listchars=
setlocal makeencoding=
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=bin,octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=javascriptcomplete#CompleteJS
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal scrolloff=-1
setlocal shiftwidth=4
setlocal noshortname
setlocal showbreak=
setlocal sidescrolloff=-1
setlocal signcolumn=auto
setlocal smartindent
setlocal nosmoothscroll
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en_us
setlocal spelloptions=
setlocal statusline=
setlocal suffixesadd=.js,.jsx,.es,.es6,.cjs,.mjs,.jsm,.vue,.json
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'javascript'
setlocal syntax=javascript
endif
setlocal tabstop=4
setlocal tagcase=
setlocal tagfunc=
setlocal tags=
setlocal termwinkey=
setlocal termwinscroll=10000
setlocal termwinsize=
setlocal textwidth=120
setlocal thesaurus=
setlocal thesaurusfunc=
setlocal undofile
setlocal undolevels=-123456
setlocal varsofttabstop=
setlocal vartabstop=
setlocal virtualedit=
setlocal wincolor=
setlocal nowinfixbuf
setlocal nowinfixheight
setlocal nowinfixwidth
set nowrap
setlocal nowrap
setlocal wrapmargin=0
silent! normal! zE
let &fdl = &fdl
let s:l = 9 - ((8 * winheight(0) + 7) / 14)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
normal! 0
lcd ~/.vim
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
set shortmess=filnxtToOS
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
