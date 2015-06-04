#   P r i n t H o u s e   A P I   C l i e n t  ![build status](https://travis-ci.org/francisbrito/ph-node.svg?branch=master) 
  
 >   A   N o d e . j s   c l i e n t   f o r   P r i n t H o u s e ' s   R E S T f u l   A P I .  
  
 # #   I n s t a l l a t i o n  
  
 ` ` ` s h  
 $   n p m   i n s t a l l   p h - n o d e  
 ` ` `  
  
 # #   U s a g e  
  
 ` ` ` j s  
 v a r   p r i n t h o u s e   =   r e q u i r e ( ' p r i n t h o u s e ' ) ,  
         c l i e n t   =   n e w   p r i n t h o u s e . C l i e n t ( ' a p i   k e y ' ) ;  
  
 c l i e n t . g e t P r o d u c t s ( f u n c t i o n   ( e r r ,   p r o d u c t s )   {  
         c o n s o l e . l o g ( ' l i s t   o f   p r o d u c t s ' ,   p r o d u c t s ) ;  
 } ) ;  
 ` ` `  
 # #   R e f e r e n c e  
  
 # # #   p r i n t h o u s e . C l i e n t ( a p i K e y ,   [ o p t i o n s ] )  
  
 P r o v i d e s   m e t h o d s   t o   a c c e s s   P r i n t H o u s e ' s   A P I .  
  
 # # # #   a p i K e y  
  
 T y p e :   ` S t r i n g `  
  
 A P I   k e y   i d e n t i f y i n g   a c c o u n t   o w n e r .  
  
 # # # #   o p t i o n s  
  
 T y p e :   ` O b j e c t `  
  
 A   J a v a S c r i p t   o b j e c t   c o n t a i n i n g   o p t i o n s   t o   b e   p a s s e d   t o   t h e   c l i e n t .  
  
 # # # # #   o p t i o n s . e n d p o i n t  
  
 T y p e :   ` S t r i n g `  
 D e f a u l t :   ` h t t p : / / p r i n t h o u s e . i o / a p i `  
  
 U R L   w h e r e   A P I   l i s t e n s   f o r   r e q u e s t s .  
  
 # # # # #   o p t i o n s . v e r s i o n  
  
 T y p e :   ` N u m b e r `  
 D e f a u l t :   L a t e s t .  
  
 A P I   v e r s i o n   t h e   c l i e n t   s h o u l d   c o n s u m e .  
  
 # # #   C l i e n t # g e t P r o d u c t s ( [ f i l t e r ] ,   f n )  
  
 R e t r i e v e s   l i s t   o f   p r i n t   p r o d u c t s   ( e . g :   c a n v a s e s ,   p h o t o   p a p e r ,   p o s t e r s ,   e t c . )  
  
 # # # #   f i l t e r  
  
 T y p e :   ` O b j e c t `  
 D e f a u l t :   ` { } `  
  
 F i l t e r s   p r o d u c t s   b y   k e y / v a l u e   p a i r s .  
  
 ` ` ` j s  
 c l i e n t . g e t P r o d u c t s ( { k i n d :   ' c a n v a s ' ,   f o r m a t :   ' 4 x 3 ' } ,   f u n c t i o n   ( e r r ,   c a n v a s )   {  
         / /   M a g i c   g o e s   h e r e .  
 } ) ;  
 ` ` `  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # g e t P r o d u c t B y I d ( i d ,   f n )  
  
 R e t r i e v e s   a   s i n g l e   p r o d u c t   b y   i t s   I D .  
  
 # # # #   i d  
  
 T y p e :   ` S t r i n g `  
  
 I d   o f   a   p r o d u c t .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # g e t P r i n t F i l e s ( f n )  
  
 R e t r i e v e s   l i s t   o f   p r i n t   f i l e s .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # g e t P r i n t F i l e B y I d ( i d ,   f n )  
  
 R e t r i e v e s   a   s i n g l e   p r i n t   f i l e   b y   i t s   I D .  
  
 # # # #   i d  
  
 T y p e :   ` S t r i n g `  
  
 I d   o f   a   p r i n t   f i l e .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # c r e a t e P r i n t F i l e ( f i e l d s ,   f n )  
  
 C r e a t e s   a   n e w   p r i n t   f i l e .  
  
 # # # #   f i e l d s  
  
 T y p e :   ` O b j e c t `  
  
 A   J a v a S c r i p t   o b j e c t   c o n t a i n i n g   p r i n t   f i l e   p r o p e r t i e s .  
  
 # # # # #   f i e l d s . f i l e  
  
 T y p e :   ` S t r i n g `  
  
 U R L   t o   p r i n t .  
  
 # # # # #   f i e l d s . p r o d u c t  
  
 T y p e :   ` S t r i n g `  
  
 I d   o f   a   p r o d u c t .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 A   N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # g e t O r d e r s ( f n )  
  
 R e t r i e v e s   a   l i s t   o r   o r d e r s .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 A   N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # g e t O r d e r B y I d ( i d ,   f n )  
  
 R e t r i e v e s   a   s i n g l e   o r d e r   b y   i t s   I D .  
  
 # # # #   i d  
  
 T y p e :   ` S t r i n g `  
  
 I d   o f   a n   o r d e r .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 A   N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # c r e a t e O r d e r ( f i e l d s ,   f n )  
  
 C r e a t e s   a   n e w   o r d e r .  
  
 # # # #   f i e l d s  
  
 T y p e :   ` O b j e c t `  
  
 A   J a v a S c r i p t   o b j e c t s   c o n t a i n i n g   o r d e r   p r o p e r t i e s .  
  
 # # # # #   f i e l d s . i t e m s  
  
 T y p e :   ` A r r a y `  
  
 A   J a v a S c r i p t   a r r a y   c o n t a i n i n g   o r d e r   i t e m s .  
  
 ` ` ` j s  
 [  
         {   / /   o r d e r   i t e m   o b j e c t  
                 q u a n t i t y :   3 ,  
                 p r o d u c t :   ' s o m e   p r o d u c t   i d . '  
         } ,  
         {  
                 q u a n t i t y :   5 ,  
                 p r o d u c t :   ' s o m e   o t h e r   p r o d u c t   i d . '  
         } ,  
         / /   . . .  
 ]  
 ` ` `  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 A   N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # u p d a t e O r d e r ( i d ,   f i e l d s ,   f n )  
  
 U p d a t e s   a n   o r d e r   i f   i t   h a s n ' t   b e e n   c o n f i r m e d   y e t .  
  
 # # # #   i d  
  
 T y p e :   ` S t r i n g `  
  
 I d   o f   a n   o r d e r .  
  
 # # # #   f i e l d s  
  
 T y p e :   ` O b j e c t `  
  
 A   J a v a S c r i p t   o b j e c t   c o n t a i n i n g   n e w   p r o p e r t i e s   f o r   o r d e r .    
  
 # # # # #   f i e l d s . i t e m s  
  
 T y p e :   ` A r r a y `  
  
 A   J a v a S c r i p t   a r r a y   c o n t a i n i n g   o r d e r   i t e m s .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 A   N o d e . j s   s t y l e   c a l l b a c k .  
  
 # # #   C l i e n t # c o n f i r m O r d e r ( i d ,   f n )  
  
 C o n f i r m s   a n   o r d e r .   O n c e   c o n f i r m e d   a   o r d e r   i s   c h a r g e d   t o   t h e   d e v e l o p e r ' s   a c c o u n t   a n d   c a n n o t   b e   u p d a t e d .  
  
 # # # #   i d  
  
 T y p e :   ` S t r i n g `  
  
 I D   o f   t h e   o r d e r   t o   b e   c o n f i r m e d .  
  
 # # # #   f n  
  
 T y p e :   ` F u n c t i o n `  
  
 A   N o d e . j s   s t y l e   c a l l b a c k .  
  
 # #   T e s t s  
  
 ` ` ` s h  
 $   n p m   t e s t  
 ` ` `  
  
 
