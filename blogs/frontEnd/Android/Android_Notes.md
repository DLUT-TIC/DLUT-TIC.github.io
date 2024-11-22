---
title: Android_Notes
date: 2024/11/22
categories:
 - fe
author: meeting77smile
tags:
 - Android_Notes
 - 手写笔记
 - 前端框架
---

# Android基础

## 学习前的声明

### 1. 语言要求

- 本次学习用到的语言为<mark>Java</mark>。（<mark>Kotlin</mark>虽然为Android官方推荐语言，但Java与Kotlin的关系类似于C与C++的关系，学好了Java，便能比较快地上手Kotlin）

### 2. 设置主界面

- 在<mark>AndroidManifest.xml</mark>文件中，在如图所示的位置改为想要作为主界面的的java文件名（注意别忘了名称开头要加点）
  
  注意：若需要<mark>运行多个界面</mark>，若程序会跳转到多个界面，则也应该将需要运行的多个Activity的java文件名写在AndroidManifest . xml文件中。
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-04%20231000.png?raw=true)

### 3. Java代码的说明

- 注意：实例中所给的代码最好<mark>别全部复制</mark>，需要看清代码的内容再<mark>选择进行复制</mark>。

- 图中所示代码上方的类名"ButtonStyleActivity"与<mark>Java文件名</mark>相同，读者在复制代码时需将其改<mark>为自己的对应的Java文件名</mark>。

- <mark>setContentView</mark>中的<mark>R</mark>指的是resource（资源），图中的activity_button_style是<mark>layout文件夹里的xml文件的文件名</mark>（注意：xml文件的文件名一般都为<mark>小写</mark>），其含义是将该<mark>xml文件</mark>设置为<mark>该Java文件的布局</mark>，读者在复制代码时也应该将其<mark>改为自己的xml文件名</mark>；

- 类似的，<mark>findViewById</mark>指的是<mark>通过id获得该视图</mark>，所以一般在xml文件中为视图定义了变量之后，若<mark>想在Java文件中使用，就需要用findViewById函数</mark>。图中**tv_result = findViewById(R.id.tv_result)** 语句中，<mark>左边</mark>的tv_result是在<mark>Java文件中的变量名</mark>，类型为TextView（由于示例图片中其被设置为了全局变量，故类型省略），<mark>右边</mark>的tv_result是<mark>xml文件中给视图组件定义的id</mark>。（注意：二者名称不一定得相同，只是此时为了易于识别才采取了相同的变量名）。
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20155735.png?raw=true)

### 4. 修改虚拟机的底部导航栏

- 首先将在虚拟机的桌面中下滑，即可找到<mark>设置</mark>选项：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20194843.png?raw=true)

- 接着在搜索中输入<mark>Button navigation</mark> 
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20194934.png?raw=true)

- 最后在所给的几种类型中选择想要的底部导航类型
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20195009.png?raw=true)

### 5. 新建Moule(模块)

- 一个Moule可简单理解为一个应用，在左侧栏显示为一个文件夹，如图中划线部分即为一个Module：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-18%20183020.png?raw=true)

- 新建方法:
  
  - 首先，点击此处，并选择"<mark>project</mark>"：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-18%20183242.png?raw=true)

- 接着，在如图所所示的位置（文件名不一定与图中相同）右键后，点击"New"，点击Module即进行新建Module。
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-18%20183501.png?raw=true)

### 6. 文件的命名

- 在学习过程中建议<mark>采取示例代码里的文件名称</mark>，这样便可以顺便学习<mark>规范的文件命名</mark>方式，并且能够使得文件名<mark>容易读懂</mark>。

- xml文件名和java文件名均可在示例代码中找到：
  
  如图中的1、2分别为<mark>java文件名</mark>和<mark>xml文件名</mark>。
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-21%20204748.png?raw=true)

### 7. 文件的建立

- java文件的建立
  
  在如图所示位置<mark>右键</mark>,选择<mark>New</mark>，选择<mark>Java Class</mark>：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-21%20205121.png?raw=true)

- xml文件的建立
  
  在学习过程中新建的xml文件多为布局文件，布局文件均放在res/layout目录下。（若无layout文件夹，请自行在res文件夹中创建）
  
  在如图所示位置<mark>右键</mark>,选择<mark>New</mark>，选择<mark>Layout Resource File</mark>:
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-21%20205204.png?raw=true)

## 1. 简单控件

### 1.1 文本显示

#### 1.1.1 设置文本内容

有两种方式：

1. **在XML文件中通过属性android:text设置文本**：
   
   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="match_parent">
   
       <TextView
           android:id="@+id/tv_test"
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:text="设置文本内容"/>
   </LinearLayout>
   ```

(其中<mark>android:id="@+id/tv_test</mark>" 是为第二种方法做准备)

2. **在Java代码中调用文本视图对象(TextView)的setText方法设置文本**：
   
   ```java
   public class TestViewActivity extends AppCompatActivity {
       @Override
       protected void onCreate(@Nullable Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           setContentView(R.layout.activity_test_view);
           TextView tv_test=findViewById(R.id.tv_test);
           tv_test.setText(R.string.test);
       }
   }
   ```

（其中，<mark>View tv</mark>为文本试图为视图对象；R.string.test可用"设置文本内容"代替。但为了方便同时修改一个值，还是用R.string.test方法合适，并在strings.xml文件中加上：

```xml
    <string name="test">设置文本内容"</string>
```

#### 1.1.2 设置字体大小

类似的，也有两种方式：

 1.**在XML文件中通过属性android:textSize设置文本（要带单位）**：

```xml
    <TextView
        android:textSize="30dp"/>
```

其中，字号单位有三种：

- **px**(PiXel像素)：是手机屏幕的最小显示单位，与设备的显示屏有关。

- **dp**：指的是与设备无关的显示单位，只与屏幕的尺寸有关。对于相同分辨率的手机，屏幕越大，相同DP的组件占用的屏幕比例越小；对于**相同尺寸**的手机，即使分辨率不同，**相同DP**的组件**占用的屏幕比例也相同**。

- **sp**：原理与dp类似，但它是<mark>专门用于设置字体大小</mark>的。当在<mark>手机系统调整字体大小</mark>时，<mark>只有以sp</mark>为单位的字体的<mark>大小会变化</mark>，<mark>px和dp</mark>则<mark>不会改变</mark>。
2. **在Java代码中调用文本视图对象的setTextSize方法设置**：
   
   ```java
   TextView tv_test=findViewById(R.id.tv_test);
   tv_test.setTextSize(30);
   ```
   
   此时设置字体大小不用带单位，默认以sp为单位(说明官方推荐以sp作为字体的单位)

#### 1.1.3 设置字体颜色

也有两种方式：

1. **在XML文件中通过属性android:textColor设置文本**：

```xml
<TextView
    android:textColor="#FF000000"/>
```

或者：

```xml
<TextView
    android:textColor="@color/black"/>
```

2. **在Java代码中调用文本视图对象(TextView)的setBackgroundColor方法或setBackgroundResource方法设置文本**:
   
   - **setBackgroundColor方法(使用系统自带的颜色)：**
     
     ```java
     TextView tv_test=findViewById(R.id.tv_test);
     tv_test.setBackgroundColor(Color.GREEN);
     ```
   
   - **setBackgroundResource方法(使用xml文件中自定义的颜色)：**
     
     先在" <mark>colors.xml</mark> "文件中定义"green"：
     
     ```xml
     <color name="green">#4CAF50</color>
     ```
     
     接着在java文件中：
     
     ```java
     TextView tv_test=findViewById(R.id.tv_test);
     tv_test.setBackgroundResource(R.color.green);
     ```

3. 补充：**使用八位十六进制数表示颜色**的注意事项：
   
   - **含义**：以八位编码#FFEEDDCC为例，FF表示透明度，EE表示红色的浓度，DD表示绿色的浓度，CC表示蓝色的浓度。
   
   - **数值**含义：透明度从FF到00，透明度逐渐增大；其他的RGB三色数值越大，表示颜色越浓，也就是越亮。
   
   - 也可以用省略前两位数字，<mark>用六位十六进制数表示</mark>颜色。在<mark>xml文件中默认前两位为FF</mark>，也就是完全不透明；在<mark>java文件中默认前两位为00</mark>，也就是完全透明。

### 1.2 视图基础

#### 1.2.1 设置视图的宽高

1. **在XML文件中通过属性android:layout设置**
   
   其中，宽高的取值主要有以下三种：
   
   - **match_parent**：表示与上级试图一致。
   
   - **warp_content**：表示与内容自适应。
   
   - **以dp为单位**的具体尺寸。

2. **在Java代码中调用文本视图对象(TextView)的getLayoutParams方法和setLayoutParams方法设置文本**：
   
   首先确保XML文件的宽高属性值为**wrap_content**：
   
   ```xml
       <TextView
           android:id="@+id/tv_code"
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:text="通过代码指定试图宽度"
           android:textSize="30dp"
           android:textColor="#000000"
           android:background="#00ffff"/>
   ```
   
   接着在JAVA文件中依次执行以下三个步骤：
   
   - 调用控件对象的getLayoutParams方法，获取该控件的布局参数。
     
     ```java
     TextView tv_code =findViewById(R.id.tv_code);
     //获取tv_code的布局参数(含宽度和高度)
     ViewGroup.LayoutParams params = tv_code.getLayoutParams();
     ```
   
   - 修改布局参数的<mark>width属性值</mark>。
     
     - 首先在原先的java文件所在的com.example文件夹中新建一个java类，并输入以下代码完成dp与px的换算。示例中以"Utils"命名。
       
       ```java
       public class Utils {
           public  static  int dip2px(Context context, float dpvalue){
               //获取当前手机的像素密度(1个dp对应几个px)
               float scale =context.getResources().getDisplayMetrics().density;
               //四舍五入取整
               return (int)(dpvalue * scale +0.5f);
           }
       }
       ```
     
     - 接着在原来的java文件中（如此时将宽度设置为300dp）：
       
       ```java
       //此处params.width默认的单位是像素px，故此时需要将单位dp利用公式换算成px：
       params.width=Utils.dip2px(this,300);
       ```
     
     - 最后调用控件对象的setLayoutParams方法，填入修改后的布局参数即可生效。
       
       ```java
       //设置tv_code的布局参数
       tv_code.setLayoutParams(params);
       ```

#### 1.2.2 设置视图的间距

可在**XML文件**中改变两种属性：

- **layout_margin** 属性（设置外间距），它指定了当前视图与周围<mark>同级</mark>视图之间的距离，包括**layout_margin** , **layout_marginLeft** , **layout_marginRight** , **layout_marginTop** , **layout_marginBottom**等属性。

- **padding** 属性（设置内间距），它指定了当前视图与内部<mark>下级</mark>视图之间的距离 , 包括**padding** , **paddingLeft** , **paddingTop** , **paddingRight** , **paddingBottom**等属性。
  
  代码示例：
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <!--最外层的布局背景为蓝色-->
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="300dp"
      android:orientation="vertical"
      android:background="#00AAFF">
  
      <!--中间层的布局背景为黄色-->
      <LinearLayout
          android:layout_width="match_parent"
          android:layout_height="match_parent"
          android:background="#FFFF99"
          android:layout_margin="20dp"
          android:padding="60dp">
  
          <!--最内层的视图背景为红色和绿色-->
          <View
              android:layout_width="50dp"
              android:layout_height="50dp"
              android:background="#FF0000"/>
          <View
              android:layout_width="50dp"
              android:layout_height="50dp"
              android:background="#00FF22"
              android:layout_marginLeft="100dp"/>
      </LinearLayout>
   </LinearLayout>
  ```
  
  其中，中间层的<mark>Linearout</mark>与内层的<mark>View</mark>是**上级和下级视图**的关系，故应该在Linearout里设置<mark>padding属性</mark> ；内层的两个<mark>view</mark>是**同级视图**的关系，故可在其中一个view中设置<mark>layout_margin属性</mark>。
  
  **注意：** 当设置的视图大小与间距属性<mark>冲突</mark>时（如设置padding属性时，内部视图的大小超过了外部视图，则会<mark>优先考虑视图间距属性</mark>。)
  
  最终效果：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/20240921212601.png?raw=true)

#### 1.2.3 设置视图的对齐方式

类似的，在<mark>XML文件</mark>中也有两种属性：

- **layout_gravity** 属性，它指定了<mark>当前视图相对于上级视图</mark>的对齐方式。

- **gravity** 属性，它指定了<mark>下级视图相对于当前视图</mark>的对齐方式。
  
  二者的取值包括：<mark>left</mark> , <mark>right</mark> , <mark>bottom</mark>  , <mark>top </mark>。
  
  还可以用<mark>竖线 “ | ” 同时取值</mark>，例如 **letf|top** 表示既靠左又靠上，也就是朝左上角对齐。此外，此方式<mark>没有顺序要求</mark>，即此时 top|left也有相同的效果。
  
  代码示例：
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <!--最外层的布局背景为蓝色-->
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="600dp"
      android:orientation="horizontal"
      android:background="#FFFF99">
  
      <!--第一个子布局背景为红色，它在上级视图中朝下对齐，它的下级视图则靠左上对齐-->
      <LinearLayout
          android:layout_width="100dp"
          android:layout_height="200dp"
          android:layout_margin="10dp"
          android:background="#F44336"
          android:layout_gravity="bottom"
          android:padding="10dp"
          android:layout_weight="1"
          android:gravity="left|top">
  
          <View
              android:layout_width="200dp"
              android:layout_height="100dp"
              android:background="#00BCD4"
      </LinearLayout>
      <!--第二个子布局背景为红色，它在上级视图中朝上对齐，它的下级视图则靠右下对齐-->
          <LinearLayout
              android:layout_width="100dp"
              android:layout_height="200dp"
              android:layout_margin="10dp"
              android:background="#F44336"
              android:layout_gravity="top"
              android:padding="10dp"
              android:layout_weight="1"
              android:gravity="right|bottom">
  
              <View
                  android:layout_width="200dp"
                  android:layout_height="100dp"
                  android:background="#00BCD4"
      </LinearLayout>
   </LinearLayout>
  ```
  
  最终效果：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-21%20225822.png?raw=true)

### 1.3 常用布局

#### 1.3.1 线性布局LinearLayout

- **线性布局的排列方式(orientation)**
  
  线性布局有两种排列方式，可通过改变LinearLayout中的<mark>orientation</mark>的属性值（不指定时默认为水平排列）：
  
  - **水平排列**：设置属性值为horizontal ，使得内部视图从左往右排列。
  
  - **垂直排列**：设置属性值为vertical ，使得内部视图从上往下排列。

- **线性布局的权重(layout_weight)**
  
  指的是线性布局的下级视图各自拥有<mark>多大比例的宽高</mark>（当个视图所占的比例=其权重/同级视图的权重和）。
  
  权重属性<mark>layout_weight</mark> 不在**layout_weight** 节点设置，而在线性布局的直接下级视图设置。
  
  - 当**layout_width**为<mark>0dp</mark> 时，layout_weight表示<mark>水平方向</mark>的宽度比例。
  
  - 当**layout_height**为0dp 时，layout_weight表示<mark>垂直方向</mark>的宽度比例。

- 代码示例：
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:orientation="vertical">
  
      <LinearLayout
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:orientation="horizontal">
  
          <TextView
              android:layout_width="0dp"
              android:layout_height="wrap_content"
              android:text="横排第一个"
              android:textSize="30dp"
              android:background="#00BCD4"
              android:layout_weight="1"/>
          <TextView
              android:layout_width="0dp"
              android:layout_height="wrap_content"
              android:text="横排第二个"
              android:textSize="30dp"
              android:background="#E91E63"
              android:layout_weight="1"/>
          <TextView
              android:layout_width="0dp"
              android:layout_height="wrap_content"
              android:text="横排第三个"
              android:textSize="30dp"
              android:background="#8BC34A"
              android:layout_weight="1"/>
      </LinearLayout>
  
      <TextView
          android:layout_width="wrap_content"
          android:layout_height="0dp"
          android:text="竖排第一个"
          android:textSize="30dp"
          android:background="#FFC107"
          android:layout_weight="2"/>
      <TextView
          android:layout_width="wrap_content"
          android:layout_height="0dp"
          android:text="竖排第二个"
          android:textSize="30dp"
          android:background="#FF5722"
          android:layout_weight="1"/>
  
  </LinearLayout>
  ```
  
  此时横排的<mark>TextView</mark> 视图各占<mark>三分之一</mark>，竖排的分别占<mark>三分之二</mark>和<mark>三分之一</mark>。
  
  横排的<mark>TextView</mark> 视图由于均为<mark>水平排列</mark>，且均把<mark>layout_width设置为0dp</mark>，故此时layout_weight表示<mark>水平方向的宽度比例</mark>；竖排同理。
  
  最终效果：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-23%20182310.png?raw=true)

#### 1.3.2 相对布局RelativeLayout

- **RelativeLayout**的<mark>下级视图的位置</mark>可由其他视图的位置决定（若不设定则<mark>默认</mark>显示在RelativeLayout内部的<mark>左上角</mark>）。用于确定下级视图位置的<mark>参照物</mark>有两种：
  
  - 与该下级视图平级的视图。
  
  - 该视图的上级视图（即它归属的RelativeLayout）。

- **RelativeLayout的属性**
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-23%20190511.png?raw=true)

- **代码示例**
  
  - **以上级视图为参照物(属性值为true或false)**：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent">
    
        <TextView
            android:id="@+id/tv_center"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="我在中间"
            android:textSize="16dp"
            android:layout_centerInParent="true"/>
        <TextView
            android:id="@+id/tv_topleft"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="我在左上角"
            android:textSize="16dp"
            android:layout_alignParentLeft="true"
            android:layout_alignParentTop="true"/>
        <TextView
            android:id="@+id/tv_bottomright"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="我在右下角"
            android:textSize="16dp"
            android:layout_alignParentRight="true"
            android:layout_alignParentBottom="true"/>
    
    </RelativeLayout>
    ```
    
    效果图：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-23%20191223.png?raw=true)
  
  - **与该下级视图平级的视图为参照物(属性值为作为参照物的同级视图的id)**
    
    - 易错：如向将一个视图设置在其<mark>平级视图的左边</mark>时，<mark>不应只设置layout_toLeftOf</mark>属性，否则会出现这种情况：
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
          android:layout_width="match_parent"
          android:layout_height="match_parent">
          <TextView
              android:id="@+id/tv_center"
              android:layout_width="200dp"
              android:layout_height="100dp"
              android:layout_centerInParent="true"
              android:text="我在中间"
              android:textSize="16dp" />
          <TextView
              android:id="@+id/tv_left"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="同级视图左边"
              android:textSize="16dp"
              android:layout_toLeftOf="@id/tv_center"/>
      </RelativeLayout>
      ```
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-23%20192524.png?raw=true)
      
      所以应该再设置<mark>layout_above(在参照物的左上方)</mark>或<mark>layout_below(在参照物的右上方)</mark>属性:
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
          android:layout_width="match_parent"
          android:layout_height="match_parent">
          <TextView
              android:id="@+id/tv_center"
              android:layout_width="200dp"
              android:layout_height="100dp"
              android:layout_centerInParent="true"
              android:text="我在中间"
              android:textSize="16dp" />
          <TextView
              android:id="@+id/tv_left"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="同级视图左边"
              android:textSize="16dp"
              android:layout_toLeftOf="@id/tv_center"
              android:layout_above="@id/tv_center"/>
      </RelativeLayout>
      ```
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-23%20192944.png?raw=true)

#### 1.3.3 网格布局GridLayout

- 网格布局支持多行多列的表格排列。

- 网格布局默认从左往右、从上到下排列，其主要有两个属性：
  
  - **columnCount属性**：它指定了<mark>网格的列数</mark>，即<mark>每行能放多少个视图</mark>。
  
  - **rowCount属性**：它指定了<mark>网格的行数</mark>，即<mark>每列能放多少个视图</mark>。

- 代码示例：
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <GridLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:columnCount="2"
      android:rowCount="2">
  
      <TextView
          android:layout_width="0dp"
          android:layout_height="60dp"
          android:background="#F6E0E0"
          android:text="粉色"
          android:textSize="16dp"
          android:textColor="#000000"
          android:gravity="center"
          android:layout_columnWeight="1"/>
      <TextView
          android:layout_width="0dp"
          android:layout_height="60dp"
          android:background="#FF9800"
          android:text="橙色"
          android:textSize="16dp"
          android:textColor="#000000"
          android:gravity="center"
          android:layout_columnWeight="1"/>
      <TextView
          android:layout_width="0dp"
          android:layout_height="60dp"
          android:background="#08FF00"
          android:text="绿色"
          android:textSize="16dp"
          android:textColor="#000000"
          android:gravity="center"
          android:layout_columnWeight="1"/>
      <TextView
          android:layout_width="0dp"
          android:layout_height="60dp"
          android:background="#8000FF"
          android:text="深紫色"
          android:textSize="16dp"
          android:textColor="#000000"
          android:gravity="center"
          android:layout_columnWeight="1"/>\
  
  </GridLayout>
  ```
  
  注意：
  
  1. 为了使<mark>字体在视图中间</mark>，需要用到先前学的<mark>gravity属性</mark>(字体text为当前视图TextView组件的<mark>下级视图</mark>)。
  
  2. 为了使得<mark>每列</mark>的TextView视图均占GridLayou<mark>t视图的一半</mark>，需要用到先前学的<mark>权重属性</mark>，但GridLayout里的权重名称变成了<mark>layout_columnWeight</mark>和<mark>layout_rowWeight</mark>，分别修改<mark>列和行</mark>的视图的权重。

- 最终结果
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-23%20202259.png?raw=true)

#### 1.3.4 滚动视图ScrollView

  当下级视图的大小超出屏幕或当前视图时，可以使用滚动视图来滑动。有两种滚动视图：

- **ScrollView** 
  
  它是<mark>垂直方向</mark>的滚动视图；当需要垂直方向的滚动时，它的<mark>layout_width</mark>的属性值需要设置为<mark>match_parent</mark>，<mark>layout_height</mark>属性值需要设置为<mark>wrap_content</mark>。

- **HorizontalScrollView**
  
  它是<mark>水平方向</mark>的滚动视图；当需要水平方向的滚动时，它的<mark>layout_width</mark>的属性值需要设置为<mark>wrap_parent</mark>，<mark>layout_height</mark>属性值需要设置为<mark>match_content</mark>。

- 代码示例
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:orientation="vertical">
  
      <HorizontalScrollView
          android:layout_width="wrap_content"
          android:layout_height="200dp">
  
          <LinearLayout
              android:layout_width="wrap_content"
              android:layout_height="match_parent"
              android:orientation="horizontal">
  
              <View
                  android:layout_width="300dp"
                  android:layout_height="match_parent"
                  android:background="#aaffff"/>
              <View
                  android:layout_width="300dp"
                  android:layout_height="match_parent"
                  android:background="#ffff00"/>
  
          </LinearLayout>
  
      </HorizontalScrollView>
  
      <ScrollView
          android:layout_width="match_parent"
          android:layout_height="wrap_content">
  
      <LinearLayout
          android:layout_width="wrap_content"
          android:layout_height="match_parent"
          android:orientation="vertical">
  
          <View
              android:layout_width="match_parent"
              android:layout_height="400dp"
              android:background="#2196F3"/>
          <View
              android:layout_width="match_parent"
              android:layout_height="400dp"
              android:background="#FF5722"/>
  
      </LinearLayout>
  
      </ScrollView>
  
  </LinearLayout>
  ```
  
  此时HorizontalScrollView里的两个TextView的<mark>宽度</mark>加起来<mark>太大</mark>了，故<mark>需要用到HorizontalScrollView</mark>；ScrollView里的两个TextView的<mark>高度加起来太大</mark>了，故<mark>需要用到ScrollView</mark>；
  
  最终效果：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-24%20135648.png?raw=true)

### 1.4 按钮控件Button

- <mark>Button是TextView的子类</mark>，因此它<mark>也是一种视图</mark>。(而<mark>TextView是View的子类</mark>)。Button与TextView的<mark>区别</mark>主要有：
  
  - <mark>Button有默认的按钮背景颜色</mark>，而TextView则没有。
  
  - <mark>Button的内部文本默认居中对齐</mark>，而TextView的内部文本默认靠左上角对齐。

#### 1.4.1 新增属性

- 与TextView相比，Button新增了两个属性：
  
  - **textAllCaps属性**
    
    它指定了<mark>是否将英文字母全部转为大写</mark>，为<mark>true</mark>表示转为<mark>大写</mark>，为<mark>false</mark>则<mark>不做大写转换</mark>。
  
  - **onClick属性**
    
    它用来接管用户的点击动作，其<mark>属性值</mark>是<mark>点击按钮时触发的方法</mark>。
  
  - 代码示例：
    
    - 首先，在xml文件中：
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
          android:layout_width="match_parent"
          android:layout_height="match_parent"
          android:orientation="vertical"
          android:padding="5dp">
          <TextView
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="下面的按钮默认英文为原样："
              android:textColor="@color/black"
              android:textSize="17sp"
              android:gravity="center"/>
          <Button
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="Hello World!"
              android:textColor="@color/black"
              android:textSize="17sp"/>
      
          <TextView
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="下面的按钮设置英文为大写："
              android:textColor="@color/black"
              android:textSize="17sp"
              android:gravity="center"/>
          <Button
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="Hello World!"
              android:textColor="@color/black"
              android:textSize="17sp"
              android:textAllCaps="true"/>
      
          <LinearLayout
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:orientation="vertical"
              android:layout_marginTop="50sp">
              <Button
                  android:layout_width="match_parent"
                  android:layout_height="wrap_content"
                  android:text="直接指定点击方法"
                  android:textColor="@color/black"
                  android:textSize="17sp"
                  android:textAllCaps="true"
                  android:onClick="doclick"/>
              <TextView
                  android:id="@+id/tv_result"
                  android:layout_width="match_parent"
                  android:layout_height="wrap_content"
                  android:text="这里显示按钮的点击结果"
                  android:textSize="17sp"
                  android:textColor="@color/black"/>
      
          </LinearLayout>
      
      </LinearLayout>
      ```
    
    - 为了实现”直接指定直接方法“按钮的点击按钮则出现语句的功能，还需要在java文件中写上:
      
      ```java
      package com.example.chapter03;
      
      import android.os.Bundle;
      import android.view.View;
      import android.widget.Button;
      import android.widget.TextView;
      
      import androidx.annotation.Nullable;
      import androidx.appcompat.app.AppCompatActivity;
      import androidx.compose.ui.text.TextRange;
      
      import com.example.chapter03.util.DateUtil;
      
      public class ButtonStyleActivity extends AppCompatActivity {
      
          private TextView tv_result;
      
          @Override
          protected void onCreate(@Nullable Bundle savedInstanceState) {
              super.onCreate(savedInstanceState);
              setContentView(R.layout.activity_button_style);
              //（涉及生命周期知识）选择在中创建tv_result：tv_result创建在onCreat中,findViewById（该语句）只需要执行一次；若创建在doclick中，则是每点击一次执行一次，太麻烦了
              tv_result = findViewById(R.id.tv_result);//按下Ctrl+Alt+f之后，再按下回车键，将tv_result从局部变量设置为全局变量
          }
      
          public void doclick(View v){
              String desc =String.format("您在%s时点击了按钮：”%s“", DateUtil.getNowTime(),((Button) v).getText());
              tv_result.setText(desc);//显示的时间不是现实时间，而是虚拟机里的时间
          }
      }
      ```
    
    - 接着再新建一个名为DateUtil（名字可任意）的java文件，在里面写上：
      
      ```java
      package com.example.chapter03.util;
      
      import java.text.SimpleDateFormat;
      import java.util.Date;
      
      public class DateUtil {
      
          public static String getNowTime(){
              SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
              return sdf.format(new Date());
          }
      }
      ```
      
      最终效果：
      
      点击前：
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-24%20164522.png?raw=true)
      
      点击后：
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-24%20164655.png?raw=true)

#### 1.4.2 点击事件

- 补充知识点：**监听器**是专门<mark>监听控件的动作行为</mark>，只有控件发生了指定的动作<mark>，监听器</mark>才会<mark>触发开关去执行</mark>对应的代码逻辑。

- 点击监听器（<mark>OnClickListener</mark>）通过<mark>setOnClickListenrt方法(View的一个内部接口)</mark>设置。按钮<mark>被按住少于500毫秒</mark>时<mark>才会触发</mark>点击事件。

- **实现**点击事件有**两种常用方法** 
  
  - 首先现在xml文件中：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <Button
            android:id="@+id/btn_click_single"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="设置单独的点击监听器"
            android:textColor="#000000"
            android:textSize="15sp"/>
        <Button
            android:id="@+id/btn_click_public"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="设置公共的点击监听器"
            android:textColor="#000000"
            android:textSize="15sp"/>
    
        <TextView
            android:id="@+id/tv_result"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="5dp"
            android:gravity="center"
            android:textColor="#000000"
            android:textSize="15sp"
            android:text="这里查看按钮的点击结果"/>
    
    </LinearLayout>
    ```
  
  接着在java文件中：
  
  - **法一**：<mark>新建一个类</mark>MyOnClickListener（名称可自定义）来<mark>实例化OnClickListener</mark> 
    
    ```java
    package com.example.chapter03;
    
    import android.os.Bundle;
    import android.view.View;
    import android.widget.Button;
    import android.widget.TextView;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    import com.example.chapter03.util.DateUtil;
    
    public class ButtonClickActivity extends AppCompatActivity {
    
        private static TextView tv_result;
    
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_button_click);
            findViewById(R.id.btn_click_single);
            tv_result = findViewById(R.id.tv_result);
            Button btn_click_single = findViewById(R.id.btn_click_single);
            btn_click_single.setOnClickListener(new MyOnClickListener());
    
        }
    
        static class MyOnClickListener implements View.OnClickListener{//1.当监听到按钮被点击
            //2.就执行该回调方法
            @Override
            public void onClick(View v) {//注意别漏了实现该接口的抽象方法
                String desc =String.format("您在%s时点击了按钮：”%s“", DateUtil.getNowTime(),((Button) v).getText());
                tv_result.setText(desc);//在My0nClickListener类里使用tv_result有两点要注意
                //1.要在My0nClickListener类对着tv_result按下Ctrl+Alt+f，将其设置全局变量
                //2.由于My0nClickListener类是static（静态）的，而tv_result不是静态的，因此需要将tv_result也设置为静态的：private static TextView tv_result
            }
        }
    }
    ```
    
    最终效果（当点击第一个按钮时有反应，点击第二个没反应）
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-24%20210939.png?raw=true)
  
  - **法二**：用<mark>当前activity的类</mark>(此时为ButtonClickActivity)来实例化<mark>OnClickListener</mark>
    
    ```java
    package com.example.chapter03;
    
    import android.os.Bundle;
    import android.view.View;
    import android.widget.Button;
    import android.widget.TextView;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    import com.example.chapter03.util.DateUtil;
    
    public class ButtonClickActivity extends AppCompatActivity implements View.OnClickListener{
    
        private static TextView tv_result;
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_button_click);
            findViewById(R.id.btn_click_public);
            tv_result = findViewById(R.id.tv_result);
            Button btn_click_public = findViewById(R.id.btn_click_public);
            btn_click_public.setOnClickListener(this);//this指当前activity(ButtonClickActivity)的实例
        }
        @Override
        public void onClick(View view) {
            if(view.getId()==R.id.btn_click_public){
                String desc =String.format("您在%s时点击了按钮：”%s“，并通过当前的类ButtonClickActivity实现", DateUtil.getNowTime(),((Button) view).getText());
                tv_result.setText(desc);
            }
        }
    }
    ```
    
    最终效果（当点击第二个按钮时有反应，点击第一个没反应）
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-24%20211312.png?raw=true)

#### 1.4.3 长按点击事件

- 长按监听器（<mark>OnLongClickListener</mark>）通过<mark>setOnLongClickListenrt方法</mark>设置。按钮被按住<mark>大于等于500毫秒</mark>时<mark>才会触发</mark> 长按点击事件。

- 实现长按点击事件（包括上述的点击事件），除了上述两种方法之外，还有第三种方法，那就用匿名内部类的方式：
  
  - 首先在xml文件中：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <Button
            android:id="@+id/btn_long_click"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="设置长按点击监听器"
            android:textColor="#000000"
            android:textSize="15sp"/>
    
        <TextView
            android:id="@+id/tv_result"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="5dp"
            android:gravity="center"
            android:textColor="#000000"
            android:textSize="15sp"
            android:text="这里查看按钮的点击结果"/>
    
    </LinearLayout>
    ```
  
  - 接着在java文件中：
    
    ```java
    package com.example.chapter03;
    
    import android.os.Bundle;
    import android.view.View;
    import android.widget.Button;
    import android.widget.TextView;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    import com.example.chapter03.util.DateUtil;
    
    public class ButtonLongClickActivity extends AppCompatActivity {
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_button_long_click);
            TextView tv_result=findViewById(R.id.tv_result);
            Button btn_long_click=findViewById(R.id.btn_long_click);
            //用匿名内部类的方式：
            btn_long_click.setOnLongClickListener(new View.OnLongClickListener() {
                @Override
                public boolean onLongClick(View view) {
                    String desc =String.format("您在%s时点击了按钮：”%s“，并通过匿名类实现", DateUtil.getNowTime(),((Button) view).getText());
                    tv_result.setText(desc);
                    return true;
                }
            });
        }
    }
    ```
    
      <mark>onLongClick函数的返回值</mark>的说明：若<mark>当前长按按钮控件</mark>之外还<mark>有一个带有长按按钮的父容器</mark>时，若返回值为<mark>true</mark>，则<mark>当前</mark>长按按钮控件会<mark>消耗（触发）点击事件</mark>而<mark>不会往外传</mark>给父容器；若返回值为<mark>false</mark>时，则<mark>当前</mark>长按按钮控件自身<mark>不会消耗</mark>（触发）点击事件，而是<mark>传给父容器</mark>，由<mark>父容器来消耗</mark>（涉及到<mark>事件冒泡</mark>知识，感兴趣可自行了解）
    
    此外，jdk 8版本以上还可以将new View.OnLongClickListener()方法用<mark>lambda表达式</mark>来替换：
    
    ```java
    btn_long_click.setOnLongClickListener(view -> {
        String desc = String.format("您在%s时点击了按钮：”%s“，并通过匿名类实现", DateUtil.getNowTime(), ((Button) view).getText());
        tv_result.setText(desc);
        return true;
    ```
    
    最终效果：当点击按钮超过300毫秒时才有反应
    
       ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-03%20214517.png?raw=true)

#### 1.4.4 禁用与恢复按钮

- 在实际开发过程中（如点击按钮发送验证码给手机后60s内，无法再次点击按钮来发送验证码），<mark>按钮</mark>通常拥有<mark>两种状态</mark>，即<mark>不可用状态</mark>与<mark>可用状态</mark>，它们在<mark>外观和功能</mark>上的<mark>区别</mark>如下：
  
  - **不可用按钮**：按钮不允许点击，即按钮<mark>点击也没反应</mark>，且按钮<mark>文字为灰色</mark>。
  
  - **可用按钮**：按钮允许点击，<mark>点击</mark>按钮会<mark>触发点击事件</mark>，同时按钮<mark>文字为正常的黑色</mark>。

- 按钮是否允许点击由<mark>enabled属性</mark>控制，属性值为<mark>true</mark>时表示<mark>允许点击</mark>，为<mark>false</mark>时表示<mark>不允许点击</mark>。

- 实例：
  
  - 首先，在xml文件中：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal">
    
            <Button
                android:id="@+id/btn_enable"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:text="启用测试按钮"
                android:textSize="17sp"/>
            <Button
                android:id="@+id/btn_disable"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:text="禁用测试按钮"
                android:textSize="17sp"/>
        </LinearLayout>
        <Button
            android:id="@+id/btn_test"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="测试按钮"
            android:textColor="#888888"
            android:textSize="17sp"
            android:enabled="false"/>
        <TextView
            android:id="@+id/tv_result"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="这里查看测试按钮的点击结果"/>
    
    </LinearLayout>
    ```
  
  - 接着，在java文件中：
    
    ```java
    package com.example.chapter03;
    
    import android.annotation.SuppressLint;
    import android.graphics.Color;
    import android.os.Bundle;
    import android.view.View;
    import android.widget.Button;
    import android.widget.TextView;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    import com.example.chapter03.util.DateUtil;
    
    public class ButtonEnableActivity extends AppCompatActivity implements View.OnClickListener {
    
        private TextView btn_test;
        private TextView tv_result;
        private TextView tvResult;
        private Button btnTest;
    
        @SuppressLint("WrongViewCast")
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_bitton_enable);
            Button btn_enable =findViewById(R.id.btn_enable);
            Button btn_disable =findViewById(R.id.btn_disable);
            btn_test = findViewById(R.id.btn_test);//设置为全局变量：鼠标对着该变量名”btn_test“，再按下ctrl+alt+f，最后按下回车
            tv_result = findViewById(R.id.tv_result);//设置为全局变量
            //设置点击事件
            btn_enable.setOnClickListener(this);//设置公共的点击事件方法：将鼠标对着“this”,再按下alt+回车，最后再选择“mark...”选项
            btn_disable.setOnClickListener(this);
            btn_test.setOnClickListener(this);
        }
        //设置公共的点击事件
        @Override
        public void onClick(View view) {
            //由于在此处还需使用btn_test与tv_result，故需要将二者设置为全局变量
            if(view.getId()==R.id.btn_enable){
                btn_test.setEnabled(true);//启用当前控件
                btn_test.setTextColor(Color.BLACK);//设置按钮的文字颜色
            } if (view.getId()==R.id.btn_disable) {
                btn_test.setEnabled(false);
                btn_test.setTextColor(Color.GRAY);
            } if (view.getId()==R.id.btn_test) {
                String desc =String.format("您在%s时点击了按钮：”%s“", DateUtil.getNowTime(),((Button) view).getText());
                tv_result.setText(desc);
            }
        }
    }
    ```

- 最终效果：
  
    刚开始时：
  
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-04%20235912.png?raw=true)
  
    按下”启用按钮“按钮后：
  
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-04%20235927.png?raw=true)
  
    按下”测试按钮“后：
  
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-04%20235938.png?raw=true)
  
    按下”禁用测试按钮“后：
  
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-04%20235949.png?raw=true)

### 1.5 图像显示

#### 1.5.1 图像视图ImageView

- 图像视图展示的图片通常位于<mark>res/drawable目录</mark>。

- <mark>设置图像视图</mark>的显示图片有<mark>两种方式</mark>（<mark>例子</mark>中的图片文件名为”<mark>img_test01</mark>“，且位于res/drawable目录）：
  
  - 在<mark>xml文件</mark>中，通过属性<mark>android:src</mark>设置图片资源，属性值格式形如”<mark>@drawable/不含拓展名的图片名称</mark>“。
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent">
        <ImageView
            android:id="@+id/iv_scale"
            android:layout_width="match_parent"
            android:layout_height="200dp" />
    </LinearLayout>
    ```
  
  - 在<mark>java代码</mark>中，使用<mark>setImageResource方法</mark>设置图片资源，方法参数格式形如”<mark>R.drawable.不含拓展名的图片名称</mark>“。
    
    ```java
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent">
        <ImageView
            android:id="@+id/iv_scale"
            android:layout_width="match_parent"
            android:layout_height="200dp"
            android:scaleType="center"/>
    </LinearLayout>
    ```

- **图像视图的缩放**
  
  - ImageView本身默认图片居中显示（<mark>默认为fitCenter/FIT_CENTER</mark>类型)，若要改变图片的显示方式，可通过<mark>scaleType属性</mark>设定，该属性的取值说明如下：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-05%20210831.png?raw=true)
  
  - 该部分可自行去试验。
  
  - <mark>center</mark>、centerInside、fitCenter、centerCrop的<mark>区别</mark>
    
    - 它们之间的区别在于：<mark>fitCenter</mark>既允许缩小图片，也允许放大图片；<mark>centerInside</mark>只允许缩小图片；<mark>center</mark>始终保持图片的原始尺寸（如果图片太大，则视图中只能显示图片的一部分），既不允许缩小图片，也不允许放大图片；<mark>centerCrope</mark>既可能缩小图片，也可能放大图片，最终结果是使得图片充满视图，可能使得图片宽高比例被改变。因此，当<mark>图片尺寸大于视图</mark>时，centerInside与fitCenter都会缩小图片，此时它俩的显示效果相同；当<mark>图片尺寸小于视图</mark>时，centerInside与center都会保持图片大小不变，此时它们的显示效果相同。

#### 1.5.2 图像按钮ImageButton

- <mark>ImageButton</mark> 是显示图片的图像按钮，它<mark>继承于ImageView</mark>，而非Button。

- **ImageButton**与**ImageView**之间的**区别**有：
  
  - <mark>ImageButton</mark>上的图像可<mark>按比例缩放</mark>，而<mark>Button</mark>通过背景设置的图像会<mark>拉伸变形</mark>，故<mark>通常</mark>图片按钮是通过<mark>ImageButton来实现</mark>。
  
  - <mark>Button</mark>只能靠背景<mark>显示一张图片</mark>，而<mark>ImageButton</mark>可分别在前景和背景显示图片，从而实现<mark>两张图片叠加</mark>的效果。
  
  - ImageButton<mark>有默认的按钮背景</mark>，ImageView<mark>默认无背景</mark>。
  
  - ImageButton<mark>默认</mark>的缩放类型为<mark>center</mark>，而ImageView<mark>默认</mark>的缩放类型为<mark>fitCenter</mark>
  
  - 示例代码
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <ImageButton
            android:layout_width="match_parent"
            android:layout_height="200dp"
            android:src="@drawable/img_test01"
            android:scaleType="fitCenter"/>
    </LinearLayout>
    ```

#### 1.5.3 同时展示文本与图像

- 同时展示文本与图像主要有**两种方式**：
  
  - 利用<mark>LinearLayout</mark>对I<mark>mageView和TextView</mark>进行<mark>组合布局</mark>。
  
  - 通过<mark>按钮控件Button</mark>的<mark>drawablexx属性</mark>来<mark>设置</mark>文本周围的<mark>图标</mark>。
    
    - ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-06%20223710.png?raw=true)
    
    - 注意：通常<mark>按钮控件Button</mark>的背景默认为紫色且<mark>无法覆盖</mark>，所以<mark>需要进行以下操作</mark>：
      
      - 首先在"AndroidMainfest.xml"文件中，按下ctrl键后用鼠标点击如图圈出的位置：
        
        ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-06%20224304.png?raw=true)
      
      - 接着会进入“themes.xml"文件中，将划线的位置改为图片中划线部分的代码：
        
        ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-06%20224606.png?raw=true)

### 1.6 项目实践：简单计算器

<mark>以下是示例代码：</mark>

#### 1.6.1 values文件夹

- **strings . xml文件**
  
  ```xml
  <resources>
      <string name="app_name">MyApplication01</string>
      <string name="test">设置文本内容"</string>
      <string name="title_activity_linear_layout">LinearLayoutActivity</string>
      <string name="simple_calculator">简单计算器</string>
      <string name="cancle">CE</string>
      <string name="clear">C</string>
      <string name="plus">+</string>
      <string name="minus">-</string>
      <string name="divide">÷</string>
      <string name="multiply">×</string>
      <string name="one">1</string>
      <string name="two">2</string>
      <string name="three">3</string>
      <string name="four">4</string>
      <string name="five">5</string>
      <string name="six">6</string>
      <string name="seven">7</string>
      <string name="eight">8</string>
      <string name="nine">9</string>
      <string name="zero">0</string>
      <string name="dot">.</string>
      <string name="equal">=</string>
      <string name="sqrt">sqrt</string>
      <string name="reciprocal">1/x</string>
  </resources>
  ```

- 在<mark>values文件夹中</mark>再<mark>新建</mark>一个名为<mark>dimens . xml</mark>的文件
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <resources>
  
      <dimen name="button_font_size">30sp</dimen>
      <dimen name="button_height">80dp</dimen>
  </resources>
  ```

#### 1.6.2 layout文件夹

- <mark>新建</mark>一个名为<mark>activity_calculator . xml</mark>的文件
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:orientation="vertical"
      android:background="#EEEEEE"
      android:padding="5dp">
  
  <!--用滚动视图可以避免某些型号手机的尺寸太小-->
      <ScrollView
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:orientation="vertical">
  
  <LinearLayout
      android:layout_width="match_parent"
      android:layout_height="wrap_content"
      android:orientation="vertical">
  
      <!--计算器的名称-->
      <TextView
          android:layout_width="match_parent"
          android:layout_height="40dp"
          android:gravity="center"
          android:text="@string/simple_calculator"
          android:textColor="@color/white"
          android:textSize="20sp"
          android:background="#03A9F4"/>
  
      <!--显示的数字，这里最后加上的lines指高度为几行-->
      <TextView
          android:id="@+id/tv_result"
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:background="@color/white"
          android:gravity="bottom|right"
          android:text="@string/zero"
          android:textSize="25sp"
          android:textColor="@color/black"
          android:lines="3"/>
  
      <GridLayout
          android:layout_width="match_parent"
          android:layout_height="match_parent"
          android:rowCount="5"
          android:columnCount="4">
  
          <Button
              android:id="@+id/btn_cancle"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/cancle"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_divide"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/divide"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_mutiply"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/multiply"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_clear"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/clear"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_seven"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/seven"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_eight"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/eight"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_nine"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/nine"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_plus"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/plus"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_four"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/four"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_five"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/five"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_six"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/six"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_minus"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/minus"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_one"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/one"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_two"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/two"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_three"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/three"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"/>
          <Button
              android:id="@+id/btn_sqrt"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/sqrt"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"
              android:textAllCaps="false"/>
          <Button
              android:id="@+id/btn_reciprocal"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/reciprocal"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"
              android:textAllCaps="false"/>
          <Button
              android:id="@+id/btn_zero"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/zero"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"
              android:textAllCaps="false"/>
          <Button
              android:id="@+id/btn_dot"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/dot"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"
              android:textAllCaps="false"/>
          <Button
              android:id="@+id/btn_equal"
              android:layout_width="0dp"
              android:layout_columnWeight="1"
              android:layout_height="@dimen/button_height"
              android:text="@string/equal"
              android:textSize="@dimen/button_font_size"
              android:textColor="@color/black"
              android:textAllCaps="false"/>
  
      </GridLayout>
  </LinearLayout>
  
      </ScrollView>
  </LinearLayout>
  ```

#### 1.6.3 java文件

- <mark>新建</mark>一个名为<mark>CalculatorActivity . java</mark>的java文件
  
  ```java
  package com.example.chapter03;
  
  import android.os.Bundle;
  import android.view.View;
  import android.widget.TextView;
  
  import androidx.annotation.Nullable;
  import androidx.appcompat.app.AppCompatActivity;
  
  import org.w3c.dom.Text;
  
  import javax.sql.StatementEvent;
  
  public class CalculatorActivity extends AppCompatActivity implements View.OnClickListener {
  
      private TextView tv_result;//设置为类中的全局变量
      private String firstNum = "";//第一个操作数
      private String operator = "";//运算符
      private String secondNum = "";//第二个操作数
      private String result = "";//当前的计算结果
      private String showText = "0";//显示在计算器上的文本内容，不一定是单个数字或符号，可以是数字与符号组成的一大串
  
      @Override
      protected void onCreate(@Nullable Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          setContentView(R.layout.activity_calculator);
          tv_result = findViewById(R.id.tv_result);
          //下面给每个按钮控件都注册监听器（由于之后用不到按钮的变量，故无需再创建新的按钮控件变量）
          findViewById(R.id.btn_cancle).setOnClickListener(this);
          findViewById(R.id.btn_divide).setOnClickListener(this);
          findViewById(R.id.btn_mutiply).setOnClickListener(this);
          findViewById(R.id.btn_clear).setOnClickListener(this);
          findViewById(R.id.btn_nine).setOnClickListener(this);
          findViewById(R.id.btn_eight).setOnClickListener(this);
          findViewById(R.id.btn_seven).setOnClickListener(this);
          findViewById(R.id.btn_six).setOnClickListener(this);
          findViewById(R.id.btn_five).setOnClickListener(this);
          findViewById(R.id.btn_four).setOnClickListener(this);
          findViewById(R.id.btn_three).setOnClickListener(this);
          findViewById(R.id.btn_two).setOnClickListener(this);
          findViewById(R.id.btn_one).setOnClickListener(this);
          findViewById(R.id.btn_plus).setOnClickListener(this);
          findViewById(R.id.btn_minus).setOnClickListener(this);
          findViewById(R.id.btn_sqrt).setOnClickListener(this);
          findViewById(R.id.btn_reciprocal).setOnClickListener(this);
          findViewById(R.id.btn_zero).setOnClickListener(this);
          findViewById(R.id.btn_dot).setOnClickListener(this);
          findViewById(R.id.btn_equal).setOnClickListener(this);
      }
  
      @Override
      public void onClick(View view) {
          String inputText;//按下按钮后输入的内容
          //将按钮对应的文本转化为字符串类型并赋值给inputText
          inputText = ((TextView) view).getText().toString();
              //用于未给按钮创建相应的变量，故需要R.id的方式
          if(view.getId()==R.id.btn_clear){//点击了清除按钮
              clear();
              }
          else if (view.getId()==R.id.btn_cancle) {//点击了回退按钮
              if (!showText.equals("") && !showText.equals("0")){
                  if(operator.equals("")){//只有操作数1
                      firstNum=firstNum.substring(0,firstNum.length()-1);
                  }
                  else {
                      if(!secondNum.equals("")){
                          secondNum=secondNum.substring(0,secondNum.length()-1);
                      }
                  }
                  refreshText(showText.substring(0,showText.length()-1));
                  }
          }
          else if (view.getId()==R.id.btn_sqrt) {//点击了开平方根按钮
              if (!firstNum.equals("")) {
                  double calculate_result = Math.sqrt(Double.parseDouble(firstNum));
                  refreshOperate(String.valueOf(calculate_result));
                  refreshText(showText + "√=" + result);
              }
          }
          else if (view.getId()==R.id.btn_plus || view.getId()==R.id.btn_minus || view.getId()==R.id.btn_mutiply ||view.getId()==R.id.btn_divide) {
              //点击了加减乘除按钮
              if (!showText.equals("")) {
                  operator = inputText;
                  refreshText(showText + operator);
              }
          }
          else if(view.getId()==R.id.btn_reciprocal) {//点击了求倒数按钮
              if (!firstNum.equals("")) {
                  double calculate_result = 1.0 / Double.parseDouble(firstNum);
                  refreshOperate(String.valueOf(calculate_result));
                  refreshText("1" + "/" + showText + "=" + result);
              }
          }
          else if (view.getId()==R.id.btn_equal) {//点击了等号按钮
              if (!showText.equals("")) {
                  if(operator.equals("")){
                      refreshText(showText+"="+showText);
                  }
                  else {
                      double calculate_result = calculateFour();
                      refreshOperate(String.valueOf(calculate_result));
                      refreshText(showText + "=" + result);
                  }
              }
          }
          else{//点击了数字或小数点
                  if (operator.equals("")) {//无运算符，则继续拼接第一个操作数（可连续拼接）
                      if((firstNum.equals(".") ||firstNum.equals("0."))&& inputText.equals(".")){//避免同时输入多个小数点
                          inputText="";
                      }
                      else{
                          firstNum = firstNum + inputText;
                      }
                  } else {//有运算符，继续拼接第二个操作数（可连续拼接）
                      if((secondNum.equals(".") ||secondNum.equals("0.")) && inputText.equals(".")){//避免同时输入多个小数点
                          inputText="";
                      }
                      else{
                          secondNum = secondNum + inputText;
                      }
                  }
                  if (showText.equals("0") && !inputText.equals(".")) {//若当前显示的数字只有0，则输入的数字应该覆盖此0；但如果输入的是小数点，
                      //则用户的目的可能是输入小数，此时不覆盖
                      refreshText(inputText);
                  }
                  else if (showText.equals("0") && inputText.equals(".")) {//一开始时就按下小数点
                      firstNum="0"+".";
                      refreshText(firstNum);
                  } else {
                      refreshText(showText + inputText);//写成”showText + “才能实现拼接的效果：是因为前面可能已经有数据了，即showtext（为该类中的全局变量，可存储值）可能已经有值了
                  }
          }
      }
  
      //清除文本显示
      private void clear() {
          refreshOperate("");//顺便借助一下该函数，能把几个参与运算的变量同时清零
          refreshText("");
      }
  
      //刷新运算结果，实现运算完之后的结果可以继续参与新的运算
      private void refreshOperate(String new_result) {
          result = new_result;
          firstNum=result;
          secondNum="";//待输入，故为空
          operator="";//待输入，故为空
      }
  
      //更新文本显示
      private void refreshText(String text){
          showText = text;
          tv_result.setText(showText);
      }
  
      //进行四则运算
      private double calculateFour(){
          if(operator.equals("+")){//parseDouble:将字符串类型转化为double类型
              return Double.parseDouble(firstNum)+Double.parseDouble(secondNum);
          } else if (operator.equals("-")) {
              return Double.parseDouble(firstNum)-Double.parseDouble(secondNum);
          } else if (operator.equals("×")) {
              return Double.parseDouble(firstNum)*Double.parseDouble(secondNum);
          } else if (operator.equals("÷")) {
              return Double.parseDouble(firstNum)/Double.parseDouble(secondNum);
          }
          return 0;
      }
  }
  ```

#### 1.6.4 最终效果

![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-09%20194406.png?raw=true)

## 2.  Activity活动

<mark>Activity</mark>（活动）其实是<mark>“安卓”系统的重要组件（组成部分）之一</mark>。Android<mark>四大组件</mark>有<mark>Activity活动</mark>，<mark>Service服务</mark>，<mark>Content Provider内容提供</mark>，<mark>BroadcastReceiver广播接收器</mark>。

一个Activity是一个应用程序的组件，通常一个Activity里会有一个页面，用户让用户来操作，完成如打电话、发短信、拍照等功能。目前我们<mark>先将Activity视为页面</mark>的意思<mark>即可</mark>。

### 2.1 启停活动页面

#### 2.1.1 Activity的启动与结束

以页面的跳转为例：

从<mark>当前页面跳转到另一个页面</mark>相对于启动了新页面，方法为：

```java
Intent intent = new Intent();
intent.setClass(源页面.this,目标页面.class);
startActivities(new Intent[]{intent});
```

从从当前页面返回上一个页面，相对于关闭当前页面，代码如下：

```java
finish();
```

- 第一个页面：ActStartActivity . java
  
  - xml文件
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        android:gravity="center">
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="这是第一个activity"
            android:textSize="17sp"
            android:textColor="@color/black"/>
    
        <Button
            android:id="@+id/btn_act_next"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="点击跳转到下一个页面"
            />
    </LinearLayout>
    ```
  
  - java文件
    
    ```java
    package com.example.activity_learning;
    
    import android.annotation.SuppressLint;
    import android.content.Intent;
    import android.os.Bundle;
    import android.view.View;
    import android.widget.Button;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    public class ActStartActivity extends AppCompatActivity implements View.OnClickListener {
        @SuppressLint("MissingInflatedId")
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_act_start);
            findViewById(R.id.btn_act_next).setOnClickListener(this);
        }
    
        @Override
        public void onClick(View view) {
            Intent intent = new Intent();
            intent.setClass(this,ActFinishActivity.class);
            startActivities(new Intent[]{intent});
        }
    
    }
    ```

- 第二个页面：ActFinishActivity . java
  
  - xml文件
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    ```
    
        <Button
            android:id="@+id/btn_act_back"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            android:text="点击返回上一个界面"
            android:textSize="17sp"/>
    
    </LinearLayout>
    ```

- java文件
  
  ```java
  package com.example.activity_learning;
  
  import android.annotation.SuppressLint;
  import android.os.Bundle;
  import android.view.View;
  
  import androidx.annotation.Nullable;
  import androidx.appcompat.app.AppCompatActivity;
  
  public class ActFinishActivity extends AppCompatActivity implements View.OnClickListener {
      @SuppressLint("MissingInflatedId")
      @Override
      protected void onCreate(@Nullable Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          setContentView(R.layout.activity_act_finish);
          findViewById(R.id.btn_act_back).setOnClickListener(this);
      }
  
      @Override
      public void onClick(View view) {
          if(view.getId() == R.id.btn_act_back){
              finish();
          }
      }
  }
  ```

- 由于需要运行两个页面，故需要在AndroidMainfest . xml文件中加上这个两个Activity的文件名：
  
  ![]()

#### 2.1.2 Activity的生命周期

- **示意图** 
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20174753.png?raw=true)

- **各函数的含义** 
  
  - <mark>onCreate</mark> ：<mark>创建活动</mark>。把页面布局加载进内存，进入<mark>初始状态</mark>。
  
  - <mark>onStart</mark>：<mark>开始活动</mark>。把活动页面显示在屏幕上，进入<mark>就绪状态</mark>。
  
  - <mark>onResume</mark>：<mark>恢复活动</mark>。使活动页面进入<mark>活动状态</mark>（如绘制动画等），能够与用户正常交互，例如能响应用户的点击动作，允许用户输入文字等等。
  
  - <mark>onPause</mark>：<mark>暂停活动</mark>。页面进入<mark>暂停状态</mark>，无法与用户正常交互。
  
  - <mark>onStop</mark>：<mark>停止活动</mark>。页面将不在屏幕上显示。
  
  - <mark>onDestory</mark>：<mark>销毁活动</mark>。回收活动占用的系统资源，把页面从内存中删除。
  
  - <mark>onRestart</mark>：<mark>重新启动</mark>。重新加载内存中的页面数据。
  
  - <mark>onNewIntent</mark>：<mark>重用已有</mark>的<mark>活动</mark>示例。

- **通过实践来理解** 
  
  - 将上一小节的ActStartActivity . java文件中修改成：
    
    ```java
    package com.example.activity_learning;
    
    import android.annotation.SuppressLint;
    import android.content.Intent;
    import android.os.Bundle;
    import android.util.Log;
    import android.view.View;
    import android.widget.Button;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    public class ActStartActivity extends AppCompatActivity implements View.OnClickListener {
        private static  final String TAG="ning";
        @SuppressLint("MissingInflatedId")
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {//savedInstanceState是一个Bundle对象，它提供了一种键值对的方式来存储和检索数据,用于在Activity的生命周期中保存和恢复状态。
            super.onCreate(savedInstanceState);
            Log.d(TAG,"ActStartActivity onCreate");//Log:日志 .Log.d ()：打印一些调试信息
            setContentView(R.layout.activity_act_start);
            findViewById(R.id.btn_act_next).setOnClickListener(this);
        }
    
        @Override
        public void onClick(View view) {
            Intent intent = new Intent();
            intent.setClass(this,ActFinishActivity.class);
            startActivities(new Intent[]{intent});
        }
    
        @Override
        protected void onStart() {
            super.onStart();
            Log.d(TAG,"ActStartActivity onStart");
        }
    
        @Override
        protected void onResume() {
            super.onResume();
            Log.d(TAG,"ActStartActivity onResume");
        }
    
        @Override
        protected void onPause() {
            super.onPause();
            Log.d(TAG,"ActStartActivity onPause");
        }
    
        @Override
        protected void onStop() {
            super.onStop();
            Log.d(TAG,"ActStartActivity onStop");
        }
    
        @Override
        protected void onDestroy() {
            super.onDestroy();
            Log.d(TAG,"ActStartActivity onDestroy");
        }
    
        @Override
        protected void onRestart() {
            super.onRestart();
            Log.d(TAG,"ActStartActivity onRestart");
        }
    }
    ```

- 接着运行该程序，并在如下位置查看程序运行时的相关信息：<mark>Log.d( )的值</mark>
  
  - 首先，在程序运行后，点击如图所示的<mark>Logcat</mark> 
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20184955.png?raw=true)
  
  - 接着，在如图所示的位置输入：<mark>tag:ning</mark>（ning是在上述代码中定义的String类型变量TAG的值），即可查看Log.d( )的值
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20185454.png?raw=true)
1. 当程序刚运行时，能够看到：
   
   依次执行了<mark>onCreate( )</mark> , <mark>onStart( )</mark> ,<mark> onResume( )</mark>方法，然后程序才开始运行(<mark>Activity is running</mark>)，符合上图的顺序。
   
   ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20185458.png?raw=true)

2. 当点击当前页面（ActStartActivity）的按钮时，会跳转到下一个页面，能够看到：
   
   当跳转到下一个界面时(<mark>Another activity comes in front of the activity</mark>)，依次执行了<mark>onPause( )</mark>和<mark>onStop( )</mark>，也符合上图顺序。
   
   ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20191421.png?raw=true)

3. 当点击当前界面（ActFinishActivity）的按钮返回时：
   
   当返回到上一个界面时(<mark>The activity comes to the foreground</mark>)，依次执行<mark>onRestart( )</mark> , <mark>onStart( )</mark> , <mark>onResume( )</mark>。
   
   ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20192913.png?raw=true)
   
   符合下图中<mark>标红</mark>的路径：
   
   ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20174753%20-%20%E5%89%AF%E6%9C%AC.png?raw=true)

4. 当点击按钮<mark>跳转到下一个界面</mark>，在当前页面的<mark>onStop( )还未执行</mark>时<mark>又马上返回</mark>当前界面时：
   
   操作方法：按下<mark>按钮</mark>跳转后，又<mark>迅速</mark>按下<mark>手机的返回键</mark>（<mark>设置底部导航的方式</mark> 见上方的”学习前的声明“）。
   
   ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20194418.png?raw=true)
   
   当在ActStartActivity页面按下跳转按钮后，首先执行了<mark>onPause( )</mark>，当还未来得及执行onStop( )时，又迅速按下手机底部导航栏的返回键，此时先前ActStartActivity仍存在，故只需再执行<mark>onResume( )</mark>即可.

5. 当在执行一个程序时，若内存空间不够了(<mark>Other applications need memory</mark>)，系统则会将挂在后台的程序清除(<mark>Process is killed</mark>)，从而腾出空间供当前的程序使用，若之后再打开后台被清除的程序，则将重新执行<mark>onCreate( )</mark> , <mark>onStart( )</mark> , <mark>onResume( )</mark>方法。此过程即下图标红的过程。
   
   ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-11%20174753%20-%20%E5%89%AF%E6%9C%AC%20(2).png?raw=true)

#### 2.1.3 Activity的启动模式

- **在配置文件中指定启动模式** 
  
  打开<mark>AndroidMainifest.xml</mark>，给activity结点添加属性<mark>android:launchMode</mark>即可改变Activity的启动模式，不添加属性时<mark>默认是标准模式</mark>（属性值为standard）。具体示例如下：
  
  ```xml
  <activity android:name=".ActStartActivity" android:launchMode="standard" />
  ```
  
  以下是常见的几种属性值：
  
  - **默认启动模式standard** 
    
    - 在该模式下，启动的Activity会<mark>按照顺序被依次压入栈中</mark>（会出现<mark>重复创建</mark>Activity的情况）：
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-15%20185836.png?raw=true)
  
  - **栈顶复用模式singleTop**
    
    - 在该模式下，如果<mark>栈顶</mark>为我们要创建的Activity（<mark>目标</mark>Activity），那么就<mark>不会重复创建</mark>新的Activity：
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-15%20190437.png?raw=true)
    
    - 应用场景：适合开启渠道多、<mark>多应用能够开启调用</mark>的Activity（如微信支付、支付宝支付的页面），通过这种设置可以避免已经创建过的Activity被重复创建，这种模式<mark>通常</mark>通过<mark>动态设置</mark>使用。
  
  - **栈内复用模式singleTask** 
    
    - 与singleTop模式相似，只不过<mark>singleTop模式只针对栈顶元素</mark>，而在singleTask模式下，如果task栈发内部存在目标Activity示例，则跳转到目标Activity时，将会把task内Activity实例之上的<mark>所有其他Activity弹出栈</mark>，并将对应Activity置于栈顶。
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-15%20191818.png?raw=true)
    
    - 应用场景：
      
      - **程序主界面**：我们通常不希望主界面被创建多次，并且我们还希望主界面退出的时候就退出整个App。
      
      - **耗费系统资源**的Activity：对于那些耗费系统资源的Activity，我们可以考虑将其设为singleTask模式，<mark>减少资源耗费</mark>，
  
  - **全局唯一模式singlelelnstance** 
    
    - 在该模式下，我们会为目标Activity<mark>创建一个新的Task栈</mark>，将目标Activity放入新的Task，并让目标Activity始终为新栈的栈顶，即<mark>新的Task有且仅有这一个Activity实例</mark>。如果已经创建过目标Activity实例，则不会创建新的Task，而是将以前创建过的Activity唤醒。当目标Activity被关闭时，其所在的Task也会一并被清除。
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-15%20192928.png?raw=true)
    
    - 实例
      
      - 将Acticity3设置为singleinstance，Activity1和Activity2设置为standard，在下放的流程图中，黄色的代表Background（后台）的Task，蓝色的代表Foreground（前台）的Task。返回时会先把Foreground的Task中的Activity弹出，直到Task销毁，然后才将Background的Task唤到前台，最后将Activity销毁之后，会直接退出应用。
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-15%20193823.png?raw=true)
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-15%20193910.png?raw=true)

- **在java文件中动态设置启动模式** 
  
  设置方式：以上一小节的ActStartActivity .  java为例，在onClick方法中：
  
  ```java
      @Override
      public void onClick(View view) {
          Intent intent = new Intent();//创建一个意图对象，准备跳到指定的活动页面
          intent.setClass(this,ActFinishActivity.class);
          intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);//设置启动标志（以属性值FLAG_ACTIVITY_CLEAR_TOP为例）
          startActivities(new Intent[]{intent});//跳转到意图对象指定的活动页面
      }
  ```
  
  - 常见的几种**Intent类的启动标志**：
  
  | Intent类的启动标志           | 说明                                                                                                                                                                                                                                                        |
  | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | **FLAG_ACTIVITY_NEW_TASK**   | 开辟一个新的任务栈，该值<mark>类似于launchMode="standard" </mark>; <mark>不同之处</mark>在于，如果原来不存在活动栈，则会创建一个新栈                                                                                                                        |
  | **FLAG_ACTIVITY_SINGLE_TOP** | 当栈顶为待跳转的活动实例之时，则重用栈顶的实例。该值<mark>等效于launchMode="singleTop"</mark>                                                                                                                                                               |
  | **FLAG_ACTIVITY_CLEAR_TOP**  | 当栈中存在待跳转的活动实例时，则会重新创建一个新的实例，并清除原实例上方的所有实例。该值<mark>与launchMode="singleTask"类似</mark>，但singleTask采取的是onNewIntent方法启用原任务，而FLAG_ACTIVITY_CLEAR_TOP采取先调用onDestory再调用onCreate来创建新任务。 |
  | **FLAG_ACTIVITY_NO_HISTORY** | 该标志与<mark>launchMode="standard"情况类似</mark>，但栈中<mark>不保存新启动的活动实例</mark>。这样下次无论以何种方式再启动该实例，也要走standard模式的完整流程。                                                                                           |
  | **FLAG_ACTIVITY_CLEAR_TASK** | 该标志非常暴力，<mark>跳转到新页面</mark>时，栈中的<mark>原有实例都将被清空</mark>。注意，该标志<mark>需要结合FLAG_ACTIVITY_NEW_TASK使用</mark>，即setFlags方法的参数为"**Intent.FLAG_ACTIVITY_CLEAR_TASK \| Intent.FLAG_ACTIVITY_NEW_TASK**"               |
  
  - 实例一：将**FLAG_ACTIVITY_CLEAR_TOP** 应用于两个页面的跳转
    
    - 优点：可避免页面重复返回
    
    - 代码示例：仍然以上一小节的ActStartActivity . java为例，在onClick方法中：
      
      ```java
          @Override
          public void onClick(View view) {
              Intent intent = new Intent();//创建一个意图对象，准备跳到指定的活动页面
              intent.setClass(this,ActFinishActivity.class);
              //当栈中存在待跳转的活动实例时，则重新创建该活动的实例，并清除原实例上方的所有实例
              intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);//设置启动标志
              startActivities(new Intent[]{intent});//跳转到意图对象指定的活动页面
          }
      ```
    
    - **运行结果**：将ActStartActivity和ActFinishActivity页面分别简称为A、B，当经历以下跳转过程时：A -> B ->A ->B ，再<mark>由B返回A</mark>（按下虚拟机的底部导航栏的返回键，而不是Activity上的Button来返回）时，<mark>此时再由A界面按下返回，则程序会直接退出</mark>，而不是再次返回A上一个的界面B。
  
  - 实例二：将**FLAG_ACTIVITY_CLEAR_TASK** 与**FLAG_ACTIVITY_NEW_TASK**结合，实现**登录成功后不再返回登录页面** 的效果
    
    - 原因：用户登录成功后，App已经默认用户是登录状态了，此时用户不必再返回登录界面重复登录，故从登录成功后进去的页面返回时，应该直接退出App，而不是再次返回登录界面。
    
    - 代码示例：仍然以上一小节的ActStartActivity . java为例，在onClick方法中：
      
      ```java
          @Override
          public void onClick(View view) {
              Intent intent = new Intent();//创建一个意图对象，准备跳到指定的活动页面
              intent.setClass(this,ActFinishActivity.class);
              //跳转到新界面时，栈中的所有实例被清空，同时开辟新的任务栈，新的任务栈中只有登录成功的页面这一个页面
              intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);//设置启动标志
              startActivities(new Intent[]{intent});//跳转到意图对象指定的活动页面
          }
      ```
    
    - **运行结果** ：此时将ActStartActivity和ActFinishActivity页面分别作为登录界面和登录成功页面，当进入登录成功页面（ActFinishActivity页面）后，再按下手机的底部导航栏的返回按钮，此时App直接退出而不是返回登录页面（ActStartActivity页面）

### 2.2 在活动之间传递消息

#### 2.2.1 显式Intent和隐式Intent

- 了解Intent
  
  - Intent是各个组件之间信息沟通的桥梁，它用于Android各组件之间的通信，主要完成下列工作;
    
    - 标明<mark>本次通信</mark>请求<mark>从哪里来</mark>、<mark>到哪里去</mark>、要<mark>怎么走</mark>。
    
    - 发起方携带数据内容，<mark>接受方</mark>从收到的意图<mark>Intent中解析数据</mark>。
    
    - 发起方若想判断接收方的处理结果，意图Intent就要负责让接收方<mark>传回应答的数据内容</mark>。

- **Intent的组成部分** 
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-16%20210920.png?raw=true)

- **显式Intent** 
  
  - **显式Intent** 可直接指定来源活动与目标活动，属于<mark>精确匹配</mark>。
  
  - 在构建一个意图对象时，需要<mark>指定两个参数</mark>，第一个参数表示跳转的<mark>来源页面</mark>，即"来源Activity.this"；第二个参数表示<mark>待跳转的页面</mark>，即"目标Activity.class"。具体的意图构建方式有如下3种（一般写在onClick方法里）：
    
    1. 在Intent的构造函数中指定，实例代码如下（ActFinishActivity为待跳转的页面）：
       
       ```java
       Intent intent = new Intent(this,ActFinishActivity.class);
       ```
    
    2. 调用意图对象的setClass方法来指定，实例代码如下：
       
       ```java
       Intent intent = new Intent();//创建一个新意图
       intent.setClass(this,ActFinishActivity.class);//设置意图要跳转的目标活动
       ```
    
    3. 调用意图对象的setComponent方法来指定，实例代码如下：
       
       ```java
       Intent intent = new Intent();
       ComponentName component = new ComponentName(this, ActFinishActivity.class);
       intent.setComponent(component);
       startActivity(intent);
       ```
  
  - 三种方式的区别：<mark>前两种方式类似</mark>，而<mark>第三种</mark>除了具有前两种方式的功能（传上下文的Activity）之外，还可用于<mark>不知道Activity的类名</mark>（前两种方式要跳转到的目标Activity和当前Activity是同时编译的，故已知目标Activity的类名），<mark>只知道包名</mark>(string类型）的情况：
    
    ```java
    public ComponentName(@NonNull String pkg, @NonNull String cls) {
        throw new RuntimeException("Stub!");
    }
    ```
    
    假设需要跳转到的目标Activity是一个<mark>系统应用</mark>的Activity，则此时只知道其包名而未知类名，故可用第三种方法。

- **隐式Intent** 
  
  - **隐式Intent** 没有明确指定要跳转的目标活动，只给出一个动作字符让系统自带匹配，属于<mark>模糊匹配</mark>。 
  
  - 通常App<mark>不希望向外部暴露Activity的名称</mark>，只给出一个事先定义好的<mark>标记串</mark>，这样在需要使用时只需按照约定俗成的标记串名称按图索骥即可，<mark>隐式Intent</mark>便起到了标记<mark>过滤作用</mark>。动作名称标记串可以是直接定义的动作，也可以是已有的系统动作，常见的<mark>系统动作</mark>的取值如下图所示：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-17%20122220.png?raw=true)
    
    - 动作名称既可以通过setAction方法指定，也可以通过构造函数Intent（String action）直接生成意图对象，如：
    
    ```java
    //1.通过setAction方法指定
    Intent intent = new Intent();
    intent.setAction((Intent.ACTION_DIAL));
    //2.通过构造函数Intent（String action）直接生成意图对象
    Intent intent = new Intent(Intent.ACTION_DIAL);
    ```
  
  - 由于动作是<mark>模糊匹配</mark>，因此<mark>需要更详细的路径</mark>，比如我们知道一个人住在某小区，还需要知道他住在哪一期、哪一栋、哪一层、哪个门牌号才能找到他。<mark>Uri</mark>和<mark>Category</mark>便是这样的路径和门类信息。<mark>Uri数据</mark>可通过<mark>构造函数Intent</mark>（String action，Uri uri）在生成对象时一起指定，也可通过<mark>setData方法</mark>指定（注：setData这个名字有歧义，实际含义相当于setUri）；<mark>Category</mark>可通过<mark>addCategory方法</mark>指定，之所以用add而不用set方法，是因为<mark>一个意图允许设置多个Category</mark>，方便一起过滤。
    
    - 下面是一个调用系统拨号程序的例子，其中用到了Uri：
      
      - xml文件：
        
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">
        
            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:padding="5dp"
                android:text="点击以下按钮向号码12345发起请求"
                android:textSize="17sp"
                android:textColor="@color/black"/>
        
            <Button
                android:id="@+id/btn_dial"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="跳到拨号页面"/>
        
        </LinearLayout>
        ```
      
      - java文件：
        
        ```java
        package com.example.activity_learning;
        
        import android.content.Intent;
        import android.net.Uri;
        import android.os.Bundle;
        import android.view.View;
        
        import androidx.annotation.Nullable;
        import androidx.appcompat.app.AppCompatActivity;
        
        public class ActionUrlActivity extends AppCompatActyity implements View.OnClickListener {
            @Override
            protected void onCreate(@Nullable Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_action_url);
                findViewById(R.id.btn_dial).setOnClickListener(this);
            }
        
            @Override
            public void onClick(View view) {
                String phoneNo = "12345";
                if(view.getId() == R.id.btn_dial){
                    Intent intent = new Intent();
                    intent.setAction((Intent.ACTION_DIAL));
                    Uri uri = Uri.parse("tel:" + phoneNo);
                    intent.setData(uri);
                    startActivity(intent);
                }
            }
        }
        ```
      
      - 运行结果：按下按钮后将跳转到如下界面，并已经拨好了号：
        
        ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-17%20124601.png?raw=true)

- 隐式Activity还用到了过滤器的概念，把不符合匹配条件的过滤掉，剩下符合条件的按照优先顺序调用。譬如创建一个App模块，AndroidMainfest . xml里的intent-filter就是配置文件中的过滤器（filter是过滤器的意思）。像最常见的首页活动MainActivity，它的activity节点下面便设置了action和category的过滤条件。其中android.intent.action.MAIN表示App的入口动作，而android.intent.category.LAUNCHER表示在桌面上显示App图标，配置样例如下：
  
  ```xml
  <activity android:name=".MainActivity"
      <intent-filter>
          <action android:name="android.intent.action.MAIN" />
          <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
  </activity>
  ```

- 隐式Intent的使用示例：
  
  - xml文件：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="5dp"
            android:text="点击以下按钮向号码12345发起请求"
            android:textSize="17sp"
            android:textColor="@color/black"/>
    
        <Button
            android:id="@+id/btn_dial"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="跳到拨号页面"/>
    
        <Button
            android:id="@+id/btn_sms"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="跳到短信页面"/>
    
        <Button
            android:id="@+id/btn_my"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="跳到我的页面"/>
    
    </LinearLayout>
    ```
  
  - java文件：
    
    ```java
    package com.example.activity_learning;
    
    import android.content.Intent;
    import android.net.Uri;
    import android.os.Bundle;
    import android.view.View;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    public class ActionUrlActivity extends AppCompatActivity implements View.OnClickListener {
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_action_url);
            findViewById(R.id.btn_dial).setOnClickListener(this);
            findViewById(R.id.btn_sms).setOnClickListener(this);
            findViewById(R.id.btn_my).setOnClickListener(this);
        }
    
        @Override
        public void onClick(View view) {
            String phoneNo = "12345";
            if(view.getId() == R.id.btn_dial){
                Intent intent = new Intent();
                intent.setAction((Intent.ACTION_DIAL));
                Uri uri = Uri.parse("tel:" + phoneNo);
                intent.setData(uri);
                startActivity(intent);
            }
            else if(view.getId() == R.id.btn_sms){
                Intent intent = new Intent();
                intent.setAction((Intent.ACTION_SENDTO));
                Uri uri2 = Uri.parse("smsto:" + phoneNo);//跳到给号码phoneNo发送短信的界面
                intent.setData(uri2);
                startActivity(intent);
            }
            else if(view.getId() == R.id.btn_my){
                Intent intent = new Intent();
                intent.setAction("android.intent.action.NING");
                intent.addCategory(Intent.CATEGORY_DEFAULT);
                startActivity(intent);
            }
        }
    }
    ```
    
    - 此外，为实现第三个按钮的功能（按钮一二实现的都是跳转到系统应用，按钮三跳转的是非系统应用），以第一章节写的应用"chapter03"(应用名)为例，若想跳到该应用，还需在该应用的AndroidMainfest . xml中的主界面下放新增：
      
      ```xml
      <intent-filter>
          <action android:name="android.intent.action.NING" />
          <category android:name="android.intent.category.DEFAULT" />
      </intent-filter>
      ```
      
      并且将<mark>exported</mark>设置为<mark>true</mark> 。（允许其他应用来启动该Activity）。
      
      总代码为：
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <manifest xmlns:android="http://schemas.android.com/apk/res/android">
      
          <application
              android:allowBackup="true"
              android:icon="@mipmap/ic_launcher"
              android:label="@string/app_name"
              android:roundIcon="@mipmap/ic_launcher_round"
              android:supportsRtl="true"
              android:theme="@style/Theme.MyApplication01">
              <activity
                  android:name=".CalculatorActivity"
                  android:exported="true">
                  <intent-filter>
                      <action android:name="android.intent.action.MAIN" />
      
                      <category android:name="android.intent.category.LAUNCHER" />
                  </intent-filter>
                  <intent-filter>
                      <action android:name="android.intent.action.NING" />
                      <category android:name="android.intent.category.DEFAULT" />
                  </intent-filter>
      
              </activity>
          </application>
      
      </manifest>
      ```
    
    - 最终效果：
      
      - ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-17%20131810.png?raw=true)
      
      - 第一个按钮效果与上文相同。
      
      - 当点击第二个按钮时,会跳转到如下给号码12345发送短信的界面：
        
        ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-17%20131955.png?raw=true)
      
      - 当点击第三个按钮时，会跳转到想要的非系统应用，以上文写的应用名为"chapter03"的计算器为例。（若无法跳转，则需要先发表运行chapter03非系统应用，并将其挂在后台；再发布运行当前按钮所在的界面，然后再点击跳转）：
        
        ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-17%20132357.png?raw=true)

#### 2.2.2 向下一个Activity传递数据

- <mark>Intent</mark>使用<mark>Bundle</mark>对象<mark>存放待传递的数据</mark>信息。（Bundle类型的对象在Android开发中非常常见，它的作用主要时用于<mark>传递数据</mark>。）,可把Bundle理解”<mark>包裹</mark>“，可携带着需要传递的内容在不同的Activity传递。

- Bundle对象操作各类型数据的读写方法如下表所示：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-18%20175106.png?raw=true)

- 实例：使用bundle在不同Activity间传递String类型的数据。
  
  - 初始界面ActSendActivity:
    
    - xml文件
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
          android:layout_width="match_parent"
          android:layout_height="match_parent"
          android:orientation="vertical">
      
          <TextView
              android:id="@+id/tv_send"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="今天天气真不错"
              android:textSize="17sp"
              android:textColor="@color/black"/>
      
          <Button
              android:id="@+id/btn_send"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:gravity="center"
              android:text="点击发送以上文字"/>
      
      </LinearLayout>
      ```
    
    - java文件：
      
      ```java
      package com.example.activity_learning;
      
      import android.content.Intent;
      import android.os.Bundle;
      import android.view.View;
      import android.widget.Button;
      import android.widget.TextView;
      
      import androidx.annotation.Nullable;
      import androidx.appcompat.app.AppCompatActivity;
      
      import util.DateUtil;
      
      public class ActSendActivity extends AppCompatActivity implements View.OnClickListener {
      
          private TextView tv_send;
      
          @Override
          protected void onCreate(@Nullable Bundle savedInstanceState) {
              super.onCreate(savedInstanceState);
              setContentView(R.layout.activity_act_send);
              Button btn_send=findViewById(R.id.btn_send);
              tv_send = findViewById(R.id.tv_send);
              btn_send.setOnClickListener(this);
          }
      
          @Override
          public void onClick(View view) {
              //设置将要传递消息和跳转的界面
              Intent intent=new Intent(this, ActReceiveActivity.class);
              Bundle bundle=new Bundle();
              //创建一个新包裹
              bundle.putString("request_time", DateUtil.getNowTime());//往包裹中写入数据
              bundle.putString("request_content",tv_send.getText().toString());
              intent.putExtras(bundle);//将包裹打包
              startActivity(intent);
          }
      }
      ```

- 待传递的界面ActReceiveActivity：
  
  - xml文件：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <TextView
            android:id="@+id/tv_receive"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:textSize="17sp"
            android:textColor="@color/black"/>
    
    </LinearLayout>
    ```
  
  - java文件：
    
    ```java
    package com.example.activity_learning;
    
    import android.os.Bundle;
    import android.widget.TextView;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    public class ActReceiveActivity extends AppCompatActivity {
    
        private TextView tv_receive;
    
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_act_receive);
            tv_receive = findViewById(R.id.tv_receive);
            //从上一个页面传来的意图中获取包裹
            Bundle bundle = getIntent().getExtras();
            String request_time = bundle.getString("request_time");//从包裹中取出数据
            String request_content = bundle.getString("request_content");
            String desc = String.format("收到请求消息：\n请求时间为:%s\n请求内容为:%s",request_time,request_content);//格式化字符串
            tv_receive.setText(desc);
        }
    }
    ```

- 别忘了在AndroidMainfest . xml文件中同时加上两个Activity的java文件名：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-18%20181522.png?raw=true)

- 注意：如果新建了与第一节不同的Moldule，需要将之前写过的DateUtil . java文件复制到该Module中，才可以在1.4.1小节之中写的DateUtil.getNowTime()来获取当前时间。

- 运行结果，当点击第一个页面的按钮后，会跳转到下一个界面，并成功传递"request_time"和"request_content"数据：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-18%20182456.png?raw=true)

#### 2.2.3 向上一个Activity返回数据

- 处理下一个页面的返回（应答）数据，详细步骤说明如下：
  
  - 上一个页面打包好请求数据，调用<mark>startActivityForResult方法</mark>执行<mark>跳转动作</mark>。
  
  - 下一个页面<mark>接收并解析请求数据</mark>，进行相应处理。
  
  - 下一个页面在返回上一个页面时，打包应答数据并调<mark>用setResult方法返回数据包裹</mark>。
  
  - 上一个页面重写方法<mark>onActivityResult</mark>（已过时，下面将使用最新的方法），<mark>解析获得</mark>下一个页面的<mark>返回数据</mark>。

- 实例
  
  - **上一个页面**
    
    - xml文件：
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
          android:layout_width="match_parent"
          android:layout_height="match_parent"
          android:orientation="vertical">
      
      <!--    传给下一个界面的请求消息-->
          <TextView
              android:id="@+id/tv_request"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"/>
      
          <Button
              android:id="@+id/btn_request"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:gravity="center"
              android:text="点击传送请求数据"/>
      
      <!--    接受的返回消息-->
          <TextView
              android:id="@+id/tv_response"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"/>
      
      </LinearLayout>
      ```
    
    - java文件
      
      ```java
      package com.example.activity_learning;
      
      import android.app.Activity;
      import android.content.Intent;
      import android.os.Bundle;
      import android.view.View;
      import android.widget.TextView;
      
      import androidx.activity.result.ActivityResult;
      import androidx.activity.result.ActivityResultCallback;
      import androidx.activity.result.ActivityResultLauncher;
      import androidx.activity.result.contract.ActivityResultContracts;
      import androidx.annotation.Nullable;
      import androidx.appcompat.app.AppCompatActivity;
      
      import util.DateUtil;
      
      public class ActRequestActivity extends AppCompatActivity implements View.OnClickListener {
          private static final String mRequest="这是请求消息";
      
          private ActivityResultLauncher<Intent> register;
          private TextView tv_response;
      
          @Override
          protected void onCreate(@Nullable Bundle savedInstanceState) {
              super.onCreate(savedInstanceState);
              setContentView(R.layout.activity_act_requet);
              TextView tv_request = findViewById(R.id.tv_request);
              tv_request.setText("待发送的消息为: " + mRequest);
              tv_response = findViewById(R.id.tv_response);
              findViewById(R.id.btn_request).setOnClickListener(this);
              //4.上一个页面重写方法onActivityResult</mark>，<mark>解析获得下一个页面的<mark>返回数据</mark>。
              //startActivityForResult()方法已经过时无法使用，以下为新的代替方式：
              register = registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
                  //result -> 是lambda表达式的形式
                  if(result != null){
                      Intent intent = result.getData();
                      if(intent != null && result.getResultCode()== Activity.RESULT_OK){
                          //返回的内容不为空且处理正常
                          Bundle bundle = intent.getExtras();//此时已经创建了Intent对象，使用intent即可，不需要使用getIntent()
                          String response_time = bundle.getString("response_time");//根据键值"response_time",从包裹中取出数据
                          String response_content = bundle.getString("response_content");
                          String desc = String.format("收到返回消息：\n返回时间为:%s\n返回内容为:%s",response_time,response_content);//格式化字符串
                          tv_response.setText(desc);//将其请求消息显示在文本视图上
                      }
                  }
              });
          }
      
          @Override
          public void onClick(View view) {
              //1.上一个页面打包好请求数据，调用startActivityForResult方法>执行跳转动作。
              Intent intent = new Intent(this,ActResponseActivity.class);
              //创建一个新包裹
              Bundle bundle=new Bundle();
              bundle.putString("request_time", DateUtil.getNowTime());//往包裹中写入数据
              bundle.putString("request_content",mRequest);
              intent.putExtras(bundle);//将包裹打包
              register.launch(intent);//startActivityForResult()方法的新的替代方式
          }
      }
      ```

- 下一个界面
  
  - xml文件
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
    <!--    从上一个界面传来的请求消息-->
        <TextView
            android:id="@+id/tv_request"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"/>
    
        <Button
            android:id="@+id/btn_response"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:gravity="center"
            android:text="点击返回应答数据"/>
    
        <!--    传给下一个界面的返回消息-->
        <TextView
            android:id="@+id/tv_response"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"/>
    </LinearLayout>
    ```
  
  - java文件
    
    ```java
    package com.example.activity_learning;
    
    import android.app.Activity;
    import android.content.Intent;
    import android.os.Bundle;
    import android.view.View;
    import android.widget.TextView;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    import util.DateUtil;
    
    public class ActResponseActivity extends AppCompatActivity implements View.OnClickListener {
        private static final String mResponse="这是回复消息";
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_act_response);
            TextView tv_request=findViewById(R.id.tv_request);
            TextView tv_response=findViewById(R.id.tv_response);
            //2.下一个页面接收并解析请求数据，进行相应处理。
            Bundle bundle = getIntent().getExtras();
            String request_time = bundle.getString("request_time");//从包裹中取出数据
            String request_content = bundle.getString("request_content");
            String desc = String.format("收到请求消息：\n请求时间为:%s\n请求内容为:%s",request_time,request_content);//格式化字符串
            tv_request.setText(desc);
            findViewById(R.id.btn_response).setOnClickListener(this);
            tv_response.setText("待发送的消息为：" + mResponse);
        }
    
        @Override
        public void onClick(View view) {
            //3.下一个页面在返回上一个页面时，打包应答数据并调用setResult方法返回数据包裹。
            Intent intent=new Intent();
            Bundle bundle = new Bundle();
            //创建一个新包裹
            bundle.putString("response_time", DateUtil.getNowTime());//把DateUtil.getNowTime()的值赋值给response_time
            bundle.putString("response_content",mResponse);
            setResult(Activity.RESULT_OK,intent);//携带意图返回上一个页面。RESULT_OK表示处理成功
            intent.putExtras(bundle);//将包裹打包
            finish();//通过关闭该界面从而回到上一个界面
        }
    }
    ```

- 最终结果：
  
  - 程序刚运行时，显示的是上一个页面：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-20%20211241.png?raw=true)
  
  - 点击按钮，进入下一个页面，同时显示：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-20%20211455.png?raw=true)
  
  - 再次单击按钮，返回上一个页面，并且显示：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-20%20211629.png?raw=true)

### 2.3 为活动补充附加信息

#### 2.3.1 利用资源文件配置字符串

- 将String放到strings . xml文件再来读取，而不是放在代码中的原因：Java代码需要编译才能运行，若进行修改则需要重新编译才能运行；配置文件（如strings . xml)不需要编码便能运行，方便灵活地进行修改。

- 例子：
  
  - 首先，在strings . xml文件中，加上：
    
    ```xml
        <string name="weather">晴天</string>
    ```
  
  - 其次，在xml文件中：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <TextView
            android:id="@+id/tv_resource"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"/>
    
    </LinearLayout>
    ```
  
  - 最后，在java文件中：
    
    ```java
    package com.example.activity_learning;
    
    import android.os.Bundle;
    import android.widget.TextView;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    public class ReadStringActivity extends AppCompatActivity {
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_read_string);
            String value = getString(R.string.weather);
            TextView tv_resourse = findViewById(R.id.tv_resource);
            tv_resourse.setText(value);
        }
    }
    ```
  
  - 最终即可显示所设置的文字内容。

#### 2.3.2 利用元数据传递配置信息

- **使用场景**
  
  - 当我们的应用<mark>需要使用</mark>到<mark>第三方应用的SDK</mark>（**Software Development Kit**，即**软件开发工具包**）时就需要使用元数据（meta-data）传递配置信息。
  
  - 如开发的应用需要嵌入高德地图的功能、需要使用微信进行第三方登录，此时都需要使用这些应用提供好的工具包。因为并不是任意用户都可以使用这些第三方应用的功能的，所以需要去这些应用的官网上<mark>下载其SDK并注册</mark>，接着我们会获得网站给的每个用户独有的唯一<mark>Token</mark>(令牌)值，接着才能使用该第三方应用的功能。最后，当我们的应用使用该第三方应用的功能时，服务器首先<mark>收到请求</mark>，接着会<mark>验证</mark>使用其功能的Activity使用的Token值是否与注册的值相匹配，最后即可使用该第三方应用，并且服务器会<mark>记录</mark>我们使用其功能的情况。

- **在代码中获取元数据**
  
  在Java代码中，获取元数据信息的步骤分为下列三步：
  
  - 调用<mark>getPackageManager</mark>方法<mark>获得</mark>当前应用的<mark>包管理器</mark>；
  
  - 调用包管理器的<mark>getActivityInfo</mark>方法获得<mark>当前活动的信息</mark>对象；
  
  - 活动信息对象的<mark>metaData</mark>是Bundle包裹类型，调用包裹对象的<mark>getString</mark>即可获得指定名称的参数值。

- **示例** 
  
  - 首先，在AndroidManifest . xml中，在当前的Acticity(示例名为MetaDataActivity，且为主Activity)下方加上：
    
    ```xml
    <meta-data android:name="weather" android:value="多云"/>
    ```
    
    总的代码为：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android">
    
        <application
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:supportsRtl="true"
            android:theme="@style/Theme.MyApplication01">
            <activity
                android:name=".ActResponseActivity"
                android:exported="false"
                android:theme="@style/Theme.MyApplication01" />
    <!-- 主Activity-->
            <activity
                android:name=".MetaDataActivity"
                android:exported="true"
                android:launchMode="standard">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN" />
                    <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
    
                <meta-data android:name="weather" android:value="多云"/>
            </activity>
        </application>
    
    </manifest>
    ```

- xml文件：
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:orientation="vertical">
  
      <TextView
          android:id="@+id/tv_meta"
          android:layout_width="match_parent"
          android:layout_height="wrap_content"/>
  
  </LinearLayout>
  ```

- java文件：
  
  ```java
  package com.example.activity_learning;
  
  import android.content.pm.ActivityInfo;
  import android.content.pm.PackageManager;
  import android.os.Bundle;
  import android.widget.TextView;
  
  import androidx.annotation.Nullable;
  import androidx.appcompat.app.AppCompatActivity;
  
  public class MetaDataActivity extends AppCompatActivity {
      @Override
      protected void onCreate(@Nullable Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          setContentView(R.layout.activity_meta_data);
          TextView tv_meta=findViewById(R.id.tv_meta);
          //1.调用getPackageManager方法获得当前应用的包管理器
          PackageManager pm= getPackageManager();
          try {//2.调用包管理器的getActivityInfo方法获得当前活动的信息
              //Activity也是组件(Component)，故getComponentName()表示获取当前Activity的名称;
              //getActivityInfo的第二个参数指想要获取Activity的什么信息，实例中是获取其的meta-data信息
              ActivityInfo info = pm.getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
              Bundle bundle = info.metaData;
              //3.调用包裹对象的getString即可获得指定名称的参数值
              String weather = bundle.getString("weather");
              tv_meta.setText(weather);
          } catch (PackageManager.NameNotFoundException e) {
              throw new RuntimeException(e);
          }
      }
  }
  ```

#### 2.3.3 给应用页面注册快捷方式

- 元数据不仅能够传递简单的字符串参数，还能传送更复杂的资源数据，比如支付宝的快捷方式菜单：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-22%20140108.png?raw=true)

- 示例
  
  - 首先，在res目录中新建一个名为"<mark>xml</mark>"的<mark>文件夹</mark>：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-22%20140410.png?raw=true)
  
  - 接着，在xml文件夹中新建一个xml文件，依次进行操作：<mark>右键点击</mark>xml文件夹-><mark>New</mark>-><mark>XML</mark>-><mark>values XML File</mark>，并命名为：shortcuts.xml（shortcut：快捷方式)。
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-22%20140547.png?raw=true)
  
  - 在shortcuts.xml中：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <shortcuts xmlns:android="http://schemas.android.com/apk/res/android">
    
        <shortcut
            android:shortcutId="first"
            android:enabled="true"
            android:icon="@mipmap/ic_launcher"
            android:shortcutShortLabel="@string/first_short"
            android:shortcutLongLabel="@string/first_long">
    
            <intent
                android:action="android.intent.action.VIEW"
                android:targetClass="com.example.activity_learning.ActStartActivity"
                android:targetPackage="com.example.activity_learning"/>
            <categories android:name="android.shortcut.conversation"/>
        </shortcut>
    
        <shortcut
            android:shortcutId="second"
            android:enabled="true"
            android:icon="@mipmap/ic_launcher"
            android:shortcutShortLabel="@string/second_short"
            android:shortcutLongLabel="@string/second_long">
    
            <intent
                android:action="android.intent.action.VIEW"
                android:targetClass="com.example.activity_learning.ActRequestActivity"
                android:targetPackage="com.example.activity_learning"/>
            <categories android:name="android.shortcut.conversation"/>
        </shortcut>
    
        <shortcut
            android:shortcutId="third"
            android:enabled="true"
            android:icon="@mipmap/ic_launcher"
            android:shortcutShortLabel="@string/third_short"
            android:shortcutLongLabel="@string/third_long">
    
            <intent
                android:action="android.intent.action.VIEW"
                android:targetClass="com.example.activity_learning.ActSendActivity"
                android:targetPackage="com.example.activity_learning"/>
            <categories android:name="android.shortcut.conversation"/>
        </shortcut>
    </shortcuts>
    ```
    
    - **android:enabled** ：是否<mark>启用</mark>。
    
    - **android:icon** ：该快捷方式对应的<mark>图标</mark>
    
    - **android:shortcutLongLabel**：该快捷方式的<mark>长名称</mark>（<mark>默认</mark>使用长名称），只能用<mark>strings.xml文件中定义的字符串给其赋值</mark>。
    
    - **android:shortcutShortLabel**：该快捷方式的<mark>短名称</mark>（当长名称的字数超过限制时，则启用短名称），只能用strings.xml文件中定义的字符串给其赋值。
    
    - **android:targetClass**：要<mark>跳转的目标页面</mark>，其值的格式为：目标页面所在包名.目标页面名。
    
    - **android:targetPackage**：要跳转的目标包名。

- 为了给**shortcutLongLabel**  和**shortcutShortLabel** 赋值，还需要在strings.xml文件中加上：
  
  ```xml
  <resources>
      <string name="app_name">Activity_Learning</string>
      <string name="first_short">first</string>
      <string name="first_long">页面1</string>
      <string name="second_short">second</string>
      <string name="second_long">页面2</string>
      <string name="third_short">third</string>
      <string name="third_long">页面3</string>
  </resources> 
  ```

- 接着，在AndroidMainfest.xml文件中:
  
  - 首先，给主Activity（示例中以ActStartActivity为主Activity）定义快捷方式：
    
    ```xml
    <meta-data
        android:name="android.app.shortcuts"
        android:resource="@xml/shortcuts"/>
    ```
  
  - 接着，注册添加快捷方式将要跳转的Activity（示例中使用.ActResponseActivit、ActSendActivity、ActRequestActivity），并将其的exported值设置为"true"：
    
    ```xml
    <activity
        android:name=".ActResponseActivity"
        android:exported="false"/>
    <activity
        android:name=".ActSendActivity"
        android:exported="true"/>
    <activity
        android:name=".ActRequestActivity"
        android:exported="true"/>
    ```
  
  - 最终，总的代码为：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android">
    
        <application
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:supportsRtl="true"
            android:theme="@style/Theme.MyApplication01">
            <activity
                android:name=".ActResponseActivity"
                android:exported="false" />
            <activity
                android:name=".ActSendActivity"
                android:exported="true" />
            <activity
                android:name=".ActRequestActivity"
                android:exported="true" />
            <!-- 主Activity-->
            <activity
                android:name=".ActStartActivity"
                android:exported="true">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN" />
                    <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
    <!--        定义长按图标时跳出的快捷方式    -->
                <meta-data
                    android:name="android.app.shortcuts"
                    android:resource="@xml/shortcuts"/>
            </activity>
        </application>
    
    </manifest>
    ```
  
  - 其中android:theme属性值中的MyApplication01为整个的安卓文件名，读者应改为自己的。

- 最终效果
  
  - 首先，先在虚拟机上找到自己的应用的图标：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-22%20145905.png?raw=true)
  
  - 如何得知应用名：如图，Activity_Learning为应用名，而ActStartActivity为其主界面（不要将ActStartActivity与MyApplication01混淆为应用名）。
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-22%20145746.png?raw=true)
  
  - 最后，当长按应用的图标时，会出现如下三个快捷方式，且点击相应的图标可以跳转到相应的界面。
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-22%20145939.png?raw=true)

## 3. 中级控件

### 3.1 图形定制

#### 3.1.1 图形Drawable

- **Android** 把所有<mark>能够显示的图形</mark>（不止是图片，还包括色块、画板、背景等）都<mark>抽象为Drawable</mark>（可绘制的）<mark>类</mark>。

- 包括图片文件在内的<mark>图形文件</mark>放在<mark>res目录的各个drawable目录下</mark>，例如：
  
  - <mark>drawable-ldpi</mark>：存放<mark>低分辨率</mark>的图片（如240×320），现在基本没有这样的智能手机了。
  
  - <mark>drawable-mdpi</mark>：存放<mark>中等分辨率</mark>的图片（如320×480），现在这样的智能手机已经很少了。
  
  - <mark>drawable-hdpi</mark>：存放<mark>高分辨率</mark>的图片（如480×800），一般对应4英寸到4.5英寸的手机（但不绝对，同尺寸的手机有可能分辨率不同，且手机分辨率只会高不会低，因为分辨率低了屏幕显示就会模糊）。
  
  - <mark>drawable-xdpi</mark>：存放<mark>加高分辨率</mark>的图片（如720×1280），一般对应5英寸到5.5英寸的手机。
  
  - <mark>drawable-xxdpi</mark>：存放<mark>超高分辨率</mark>的图片（如1080×1920），一般对应6英寸到5.5英寸的手机。
  
  - <mark>drawable-xxxdpi</mark>：存放<mark>超超高分辨率</mark>的图片（如1440×2560），一般对应 7英寸以的平板电脑。

- 当各目录存放<mark>同名图片</mark>，Android就会<mark>根据手机的分辨率分别适配</mark>对应文件夹里的图片。在开发App时，为了兼容不同的手机屏幕，在各目录存放不同分辨率的图片，才能达到最合适的显示效果，当找不到合适分辨率的图片时，设备显示的图片则会变模糊。

- 在<mark>XML布局文件中引用图形文件</mark>可使用"<mark>@drawable/不含扩展名的文件名称</mark>"这种形式，如各视图的bcakground属性、ImageView和ImageButton的src属性、TextView和Button四个方向的drawable系列属性都可以引用图形文件。

#### 3.1.2 形状图形

- Shape图形又称形状图形，它用来描述常见的几何形状，包括矩形、圆角矩形、圆形、椭圆等等。

- 形状图形的定义文件是以shape标签为根节点的XML表述文件，它支持四种类型的形状：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-23%20194424.png?raw=true)
  
  - rectangle;矩形，默认值
  
  - oval：椭圆。此时corners（圆角）节点会失效。
  
  - line：直线。此时必须设置stroke节点，不然会报错。
  
  - ring：圆环。

- 示例：
  
  - 首先，按照如图所示方法在drawable文件夹中新建两个Drawable Resource File文件，并分别命名（示例中分别为shape_oval_rose和shape_rec_gold）和设置根节点为shape：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-23%20192744.png?raw=true)
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-23%20192313.png?raw=true)
    
    - shape_oval_rose.xml文件的代码为：
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <shape xmlns:android="http://schemas.android.com/apk/res/android"
          android:shape="oval"><!--指定形状，有四种可选择-->
      
          <!--指定了形状内部的填充颜色-->
          <solid android:color="#ff66aa"/>
          <!--指定了形状轮廓的粗细与颜色-->
          <stroke
              android:width="1dp"
              android:color="#aaaaaa"/>
      </shape>
      ```
    
    - shape_rec_gold.xml文件的代码为：
      
      ```xml
      <?xml version="1.0" encoding="utf-8"?>
      <shape xmlns:android="http://schemas.android.com/apk/res/android">
      
          <!--指定了形状内部的填充颜色-->
          <solid android:color="#ffdd66"/>
          <!--指定了形状轮廓的粗细与颜色-->
          <stroke
              android:width="1dp"
              android:color="#aaaaaa"/>
          <!--指定了形状四个圆角的半径-->
          <corners android:radius="40dp"/>
      </shape>
      ```
  
  - 接着，xml代码为：
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">
    
        <View
            android:id="@+id/v_content"
            android:layout_width="match_parent"
            android:layout_height="200dp"
            android:layout_margin="10dp"/>
    
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal">
        <Button
            android:id="@+id/btn_rect"
            android:layout_width="0dp"
            android:layout_weight="1"
            android:layout_height="wrap_content"
            android:text="圆角矩形背景"/>
    
        <Button
            android:id="@+id/btn_oval"
            android:layout_width="0dp"
            android:layout_weight="1"
            android:layout_height="wrap_content"
            android:text="椭圆背景"/>
        </LinearLayout>
    
    </LinearLayout>
    ```
  
  - java代码为：
    
    ```java
    package com.example.control_widget;
    
    import android.os.Bundle;
    import android.view.View;
    
    import androidx.annotation.Nullable;
    import androidx.appcompat.app.AppCompatActivity;
    
    public class DrawableShapeActivity extends AppCompatActivity implements View.OnClickListener {
    
        private View v_content;//定义为全局变量
    
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_drawable_shape);
            v_content = findViewById(R.id.v_content);
            findViewById(R.id.btn_oval).setOnClickListener(this);
            findViewById(R.id.btn_rect).setOnClickListener(this);
        }
    
        @Override
        public void onClick(View view) {
            if(view.getId() == R.id.btn_oval){
                v_content.setBackgroundResource(R.drawable.shape_oval_rose);
            }
            else if(view.getId() == R.id.btn_rect){
                v_content.setBackgroundResource(R.drawable.shape_rec_gold);
            }
        }
    }
    ```

- 最终，当点击第一个按钮时显示：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-23%20194445.png?raw=true)
  
  点击第二个按钮时显示：
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-23%20194454.png?raw=true)

- **涉及的节点和属性**
  
  - **size（尺寸）**
    
    - 描述了形状图形的<mark>宽高尺寸</mark>，若无size节点，则表示宽高与宿主视图一样大小。下面是size节点常用的属性说明：
      
      - **height**：像素类型，图形高度。
      
      - **width**：像素类型，图形宽度
  
  - **stroke（描边）**
    
    - stroke是<mark>shape的下级节点</mark>（<mark>写在shape内部</mark>），它描述了形状图形的<mark>描边规格</mark>。若<mark>无stroke节点，则表示不存在描边</mark>，下面是stroke节点的常用属性说明：
      
      - **color**：表示<mark>描边的颜色</mark>，为颜色类型。
      
      - **dashGap**：表示用来<mark>描边的每段虚线之间的间隔</mark>，为像素类型。
      
      - **dashWidth**：表示用来描边的每段<mark>虚线的宽度</mark>。若dashGap和dashWidth有一个值为0，则描边为实现。
      
      - **width**：像素类型，<mark>描边的厚度</mark>。
  
  - **corners**（圆角）
    
    - corners是shape的下级节点，描述了形状图形的**圆角大小**，若<mark>无corners节点，则表示没有圆角</mark>。下面是corners节点的常用属性说明：
      
      - **bottomLeftRadius**：像素类型，<mark>左下圆角</mark>的半径。
      
      - **bottomRightRadius**：像素类型，<mark>右下圆角</mark>的半径。
      
      - **topRightRadius**：像素类型，<mark>右上圆角</mark>的半径。
      
      - **topLeftRadius**：像素类型，<mark>左上圆角</mark>的半径。
      
      - **radius**：像素类型，表示<mark>四个圆角的半径</mark>（若有上面四个圆角半径的定义，则不需要radius定义）。
  
  - **solid（填充）**
    
    - solid是shape的下级节点，描述了形状图形的<mark>填充色彩</mark>。若<mark>无solid节点，则表示无填充颜色</mark>。下面是solid节点的常用属性说明。
      
      - **color**：颜色类型，内部填充的颜色。
  
  - **gradient（渐变）**
    
    - gradient是shape的下级节点，描述了形状图形的<mark>颜色渐变</mark>，若<mark>无gradient节点，则表示没有渐变效果</mark>。下面是gradient节点的常用属性说明。
      
      - **angle**：整形，表示<mark>渐变的起始角度</mark>。为0时表示时钟的9点位置，值增大表示往逆时针方向旋转。例如，值为90表示6点位置，值为180表示3点位置，值为270表示0点/12点位置。
      
      - **type**：字符串类型，表示<mark>渐变类型</mark>。渐变类型的取值说明如下表显示：
        
        | **渐变类型** | **说明**                                                     |
        | ------------ | ------------------------------------------------------------ |
        | linear       | <mark>线性渐变</mark>，默认值                                |
        | radial       | <mark>放射渐变</mark>，起始颜色就是圆心颜色                  |
        | sweep        | <mark>滚动渐变</mark>，即一个线段以某个端点为圆心做360度旋转 |
      
      - centerX：浮点型，表示<mark>渐变圆心的X坐标</mark>。当android:type="linear"时不可用。
      
      - centerY：浮点型，表示<mark>渐变圆心的Y坐标</mark>。当android:type="linear"时不可用。
      
      - gradientRadius：整型，表示<mark>渐变的半径</mark>。当android:type="radial"时需要设置该属性。
      
      - centerColor：颜色类型，表示<mark>渐变的中间颜色</mark>（只能设置一次）。
      
      - startColor：颜色类型，表示<mark>渐变的起始颜色</mark>（只能设置一次）。
      
      - endColor：颜色类型，表示<mark>渐变的终止颜色</mark>（只能设置一次）。
      
      - useLevel：布尔类型，设置<mark>为true为无渐变色</mark>，false为有渐变色。

- 在实际开发中，形状图形<mark>主要</mark>使用3个节点：<mark>stroke</mark>（描边)、<mark>corners</mark>（圆角)和<mark>solid</mark>(填充)。至于shape根根节点的属性一般不用设置（默认矩形即可）。

#### 3.1.3 九宫格图片（点9图片）

- **使用场景**：将某张图片设置成视图背景时，如果图片的尺寸太小，则系统会自动拉伸图片使之填满背景，可说的图片一旦<mark>拉伸得过大</mark>，其画面又容易<mark>模糊</mark>，此时就需要使用九宫格图片。又称之为点9图片的原因是其文件名的后缀带有 <mark>.9</mark> 。

- 例子：
  
  - 首先，在res文件夹中再新建一个名为drawable-xhdpi的文件夹（需要选择Project模式才能看到该文件夹）：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20202004.png?raw=true)

- 接着，将需要设置为视图背景的<mark>图片放到drawable-xhdpi文件夹中</mark>，接着<mark>右键</mark>点击该图片，选择<mark>New</mark>，再选择<mark>Create 9-Patch file</mark>，即可将其转化为点9文件，会发现其<mark>后缀名多了一个.9</mark>（注意，最后将转化成的<mark>点9文件</mark>设置<mark>与原图不同的文件名</mark>，否则之后进行引用时容易与原图的文件名产生冲突）。
  
  ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20194355.png?raw=true)
  
  - 点击点9图片即可进入图片的<mark>加工区</mark>域。加工区域的右侧窗口是图片的预览区域，将<mark>鼠标放到左侧窗口的图片的上、下、左、右</mark>位置均会出现<mark>灰框</mark>，其功能分别为：
    
    - **上边**：指<mark>水平方向的拉伸区域</mark>。水平方向拉伸区域时，只有<mark>灰色框</mark>区域内的图像<mark>会拉伸</mark>，<mark>灰框之外</mark>的图像将会<mark>保持原状</mark>，从而保证左右两侧的边框宽度不变（可通过鼠标调整灰框的大小）。
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20205021.png?raw=true)
    
    - 左边：指<mark>垂直方向的拉伸区域</mark>。垂直方向拉伸区域时，只有灰色框区域内的图像会拉伸，灰框之外的图像将会保持原状，从而保证左右两侧的边框高度度不变（可通过鼠标调整灰框的大小）。
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20205107.png?raw=true)
    
    - 下边：指将该图片作为控件背景时，<mark>控件内部的文字左右边界只能放到灰框区域内</mark>。这里的<mark>Horizontal Padding</mark>的效果就相当于<mark>android:paddingLeft与android:paddingRight</mark>。
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20205140.png?raw=true)
    
    - 右边：指将该图片作为控件背景时，控件内部的文字<mark>上下边界</mark>只能放到灰框区域内。这里的<mark>Vertical Padding</mark>的效果就相当于<mark>android:paddingTop与android:paddingBottom</mark>。
      
      ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20205205.png?raw=true)
      
      - 注意：如果将<mark>点9图片</mark>设置为视图背景，且该图片<mark>指定了Horizontal Padding和Vertical Padding</mark>，那么视图内部将一直与视图边缘保持固定间距，此时将<mark>无法通过XML文件和Java文件来改变间隔</mark>，因为点9图片已经在水平和垂直方向都设置了padding，因此若想XML文件和Java文件堆视图背景设置的padding起作用，则不能在点9图片中指定Horizontal Padding和Vertical Padding（即鼠标点击下边和右边时显示的灰框）。
    
    接着，在AndroidManifest.xml文件中修改activity的主题，这样才能显示出按钮的背景图：
    
    首先在<mark>AndroidManifest.xml中按下ctrl后用鼠标左键</mark>点击该位置：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20200050.png?raw=true)
    
    接着将如图的位置改成图中的代码：
    
    ![](https://github.com/meeting77smile/Android-Learning/blob/main/note/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-10-24%20200210.png?raw=true)

- 之后，xml为（其中button_nomal_orig和button_nomal_nine分别为<mark>原图片</mark>和<mark>点9图片</mark>的文件名，读者<mark>需改为自己的文件名</mark>）：
  
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:orientation="vertical">
  
      <Button
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:background="@drawable/button_nomal_nine"
          android:text="普通背景图片"/>
  
      <Button
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:layout_marginTop="5dp"
          android:background="@drawable/button_nomal_nine"
          android:text="九宫格图片背景"/>
  
  </LinearLayout>
  ```

- java文件：
  
  ```java
  package com.example.control_widget;
  
  import android.os.Bundle;
  
  import androidx.annotation.Nullable;
  import androidx.appcompat.app.AppCompatActivity;
  
  public class DrawableNineActivity extends AppCompatActivity {
      @Override
      protected void onCreate(@Nullable Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          setContentView(R.layout.activity_drawable_nine);
      }
  }
  ```

- 最终运行代码，比较原图作为按钮和点9图片作为视图背景的差异。