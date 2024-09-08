package com.dao;

import com.entity.LiangcangChuruInoutListEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.LiangcangChuruInoutListView;

/**
 * 出入库详情 Dao 接口
 *
 * @author 
 */
public interface LiangcangChuruInoutListDao extends BaseMapper<LiangcangChuruInoutListEntity> {

   List<LiangcangChuruInoutListView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
